// This file is for the communication between frontend and backend

/*
TODO:
#1. confirm with backend regarding the endpoint of each API
#2. confirm with backend regarding the string names 
#3. for Bill payment, can we use "GET" rather than "POST". 
# . get the domain.
*/


const domain = "";  

// handle the repsonse status returned from backend
const handleResponseStatus = (response, errMsg) => {
    
    const{status, ok} = response;

    // if token is invalid
    if (status === 401) {
        window.location.reload();
        return;
    }
    if (!ok) {
        throw Error(errMsg);
    }
};

// log in. if success then store the token
export const login = (credential) => {
    const url = `${domain}/login`;
    return fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credential),
    }).then((response) => {
        if (!response.ok) {
            throw Error("Fail to log in.");
        }
        return response.text();
    });
};

// sign up
export const signup = (credential) => {

    const url = `${domain}/signup`;

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(credential),
    }).then((response) => {
        handleResponseStatus(response, "Fail to sign up.");
    });
};

// log out
export const logout = () => {
    console.log("You clicked logout button")
    const url = `${domain}/logout`;
    
    return fetch(url, {
        method: "POST",
        credentials: "include",
    }).then((response) => {
        handleResponseStatus(response, "Fail to log out.")
    })
};

// get a list of annoucement
export const getAnnouncements = () => {
    
    const url = `${domain}/announcement`;
    return fetch(url, {
        method: "GET",
        credentials: "include",
    }).then((response) => {
        handleResponseStatus(response, "Fail to get the Announcement list.");
        return response.json();
    });
}

// get a list of bills
export const getBills = () => {

    const url = `${domain}/bills`;

    return fetch(url, {
        method: "GET",
        credentials:"include",
    }).then((response) => {
        handleResponseStatus(response, "Fail to get the bills.");
        return response.json();
    });
}

// make a payment to a bill
export const payBill = (invoiceId) => {
    console.log("you click paybills for invoice#", invoiceId);

    const url = `${domain}/checkout?invoiceId=${invoiceId}`;

    return fetch(url, {
        method: "POST",
        credentials:"include",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        handleResponseStatus(response, "Fail to accept payment request.");
        return response.text();
    }).then((redirectUrl) => {
        window.location = redirectUrl;
    });
    
};

// get a list of maintenance requests
export const getRequests = () => {
    const url = `${domain}/maintenance`;

    return fetch(url, {
        method: "GET",
        credentials:"include",
    }).then((response) => {
        handleResponseStatus(response, "Fail to get the maintenance requests.");
        return response.json();
    });
};

// submit a new maintenance request
export const newRequest = (data) => {
    console.log("you submitted new request, the title is: ", data.title);

    const url = `${domain}/maintenance`;

    return fetch(url, {
        method: "POST",
        credentials:"include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        handleResponseStatus(response, "Fail to submit new request.");
    });

};

// update an existing maintenance request
export const updateRequest = (data) => {
    console.log("you updated request ", data.requestId);

    const url = `${domain}/maintenanceUpdate`;

    return fetch(url, {
        method: "POST",
        credentials:"include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        handleResponseStatus(response, "Fail to update request.");
    });   
};

// delete an existing maintenance request
export const deleteRequest = (requestId) => {
    console.log("you delete request ", requestId);

    const url = `${domain}/maintenanceUpdate?requestId=${requestId}`;

    return fetch(url, {
        method: "POST",
        credentials:"include",
    }).then((response) => {
        handleResponseStatus(response, "Fail to delete the request.");
    });
};
