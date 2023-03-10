import { Menu } from 'antd';
import { useState } from 'react';
import Announcements from './Announcements';
import Maintenance from './Maintenance';
import Bills from './Bills';
import Contacts from './Contacts';

const items = [
    {
        label: 'Announcements',
        key: 'announcemets',
    },
    {
        label: 'Maintenance',
        key: 'maintenance',
    },
    {
        label: 'Bills',
        key: 'bills',
        
    },
    {
        label: 'Contact Us',
        key: 'contacts',
    },
];

const TogglePage = ({current}) => {
    switch (current) {           
        case "maintenance":
            return <Maintenance />;
        case "bills": 
            return <Bills />;
        case "contacts":
            return <Contacts />;
        default:
            return <Announcements />;
    }  
};

const HomePage = () => {

    const[current, setCurrent] = useState("announcement");

    const onItemClick = (e) => {
        setCurrent(e.key);
    };
    return (
        <div style={{ fontSize: 20, fontWeight: 600 }}>
            <div style={{paddingLeft:"50%", 
            borderBottomColor:"#282c34", borderBottomWidth:"4px", 
            borderBottom:"6px ridge rgba(66, 70, 92, .3)"}}>
            <Menu 
                onClick={onItemClick} 
                selectedKeys={[current]} 
                mode="horizontal" 
                items={items} 
                style={{backgroundColor: "#f0f2f5", fontSize: 18}}

            />
            </div>
            <div style={{paddingLeft: "30px", paddingRight:"30px", paddingTop:"10px"}}>
            <TogglePage current={current}/>
            </div>
        </div>
    );
}
export default HomePage;