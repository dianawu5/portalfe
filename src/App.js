import { Layout, Dropdown, Menu, Button, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import { logout, paymentConfirm } from "./utils";

const { Header, Content, Footer } = Layout;

function App() {
  
  const[loggedIn, setLoggedIn] = useState(false);// changed to false later

  useEffect(() => {
    let state = doesHttpOnlyCookieExist('JSESSIONID');
    console.log(state);
    if (state) {
      setLoggedIn(true);
      return;
    }
  },[]);
// need to decide keep this one or the one in Bills.js 
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
        paymentConfirm();
        // message.success("Payment is made successfully!");
    }
  },[]);

  const doesHttpOnlyCookieExist = (cookieName) => {
    let d = new Date();
    d.setTime(d.getTime() + (1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=new_value;path=/;" + expires;
    console.log(document.cookie.indexOf(cookieName + '=') === -1)
    return document.cookie.indexOf(cookieName+'=')=== -1;
  }

  const handleLogOut = async() =>{
    try{
      await logout();
      setLoggedIn(false);
      message.success("You logged out successfully!")
    } catch (error) {
      message.error(error.message);
    }
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogOut}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  }

  const renderContent = () => {
  
    if (!loggedIn) {
      return<LoginForm onLoginSuccess={handleLoginSuccess} />;
    }
  
    return <HomePage />;
  };

  return (
    <Layout style={{height: "100vh"}}>
  
      <Header style={{ display: "flex",  justifyContent:"space-between"}}>

        <div style={{ fontSize: 20, fontWeight: 600, color: "white" }}>
          Community Portal  
        </div>
        {loggedIn && ( 
          <div>
            <Dropdown trigger="click" overlay={userMenu} >
              <Button icon={<UserOutlined/>} shape="circle" />
            </Dropdown>
          </div>

        )}
      </Header>

      <Content 
        style={{ height: "calc(100% - 64px)", padding: 20, overflow: "auto" }} >
        {renderContent()}
      </Content>
      <Footer 
        style={{textAlign: "center", backgroundColor:"#282c34", 
        color:"gray", height:"5%", fontSize: 12, padding: "15px"}}
      > 
        Made by FLAGCAMP TEAM3 
      </Footer>

    </Layout>
  );
}

export default App;
