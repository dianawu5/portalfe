import { Layout, Dropdown, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";

/*
To see the login and logout feature, 
please uncomment the codes in renderContent 
and change the true to "authed" in Header
*/
const { Header, Content, Footer } = Layout;

function App() {
  
  const[authed, setAuthed] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setAuthed(authToken !== null);
  },[]);

  const handleLogOut = () =>{
    localStorage.removeItem("authToken");
    setAuthed(false);
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogOut}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  const handleLoginSuccess = () => {
    setAuthed(true);
  }

  const renderContent = () => {
/*   if (authed === undefined) {
      return <></>;
    }
    if (!authed) {
      return<LoginForm onLoginSuccess={handleLoginSuccess} />;
    }
*/    
    return <HomePage />;
  };

  return (
    <Layout style={{height: "100vh"}}>
  
      <Header style={{ display: "flex",  justifyContent:"space-between"}}>

        <div style={{ fontSize: 20, fontWeight: 600, color: "white" }}>
          Community Portal  
        </div>
        {true && ( // need to change to authed later
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
