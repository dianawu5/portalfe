import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import Announcements from './Annoncements';
import Maintenance from './Maintenance';
import Bills from './Bills';

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
        
    },];

const HomePage = () => {

    const[current, setCurrent] = useState();

    useEffect(() =>{
        setCurrent('announcements');
    },[]);

    const onItemClick = (e) => {
        setCurrent(e.key);
    };

    // change to the selected component
    // later will be changed to <Maintenance />; <Bills />; <Announcement />
    const switchPage = () => {
        switch (current) {           
            case "maintenance":
                return <Maintenance />;
            case "bills": 
                return <Bills />;
            default:
                return <Announcements />;
        }  
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
                {switchPage()}
            </div>
        </div>
    );
}
export default HomePage;