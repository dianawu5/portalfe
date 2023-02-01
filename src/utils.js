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
        localStorage.removeItem("authToken");
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
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credential),
    }).then((response) => {
        if (!response.ok) {
            throw Error("Fail to log in.");
        }
        return response.text();
    }).then((token) => {
        localStorage.setItem("authToken", token);
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

// get a list of annoucement
export const getAnnouncements = () => {
    const authToken = localStorage.getItem("authToken");
    const url = `${domain}/announcement`;
    return fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    }).then((response) => {
        handleResponseStatus(response, "Fail to get the Announcement list.");
        return response.json();
    });
}

// get a list of bills
export const getBills = () => {

    const authToken = localStorage.getItem("authToken");
    const url = `${domain}/bills`;

    return fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    }).then((response) => {
        handleResponseStatus(response, "Fail to get the bills.");
        return response.json();
    });
}

// make a payment to a bill
export const payBill = (invoiceId) => {
    const authToken = localStorage.getItem("authToken");
    const url = `${domain}/checkout?invoiceId={invoiceId}`;

    return fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${authToken}`,
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
    const authToken = localStorage.getItem("authToken");
    const url = `${domain}/maintenance`;

    return fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    }).then((response) => {
        handleResponseStatus(response, "Fail to get the maintenance requests.");
        return response.json();
    });
};

// submit a new maintenance request
export const newRequest = (data) => {
    const authToken = localStorage.getItem("authToken");
    const url = `${domain}/maintenance`;

    return fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        handleResponseStatus(response, "Fail to submit new request.");
    });

};

// update an existing maintenance request
export const updateRequest = (data) => {
    const authToken = localStorage.getItem("authToken");
    const url = `${domain}/maintenance/updaterequest`;

    return fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        handleResponseStatus(response, "Fail to update request.");
    });   
};

// delete an existing maintenance request
export const deleteRequest = (requestId) => {
    const authToken = localStorage.getItem("authToken");
    const url = `${domain}/maintenance/${requestId}`;

    return fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    }).then((response) => {
        handleResponseStatus(response, "Fail to delete the request.");
    });
};
