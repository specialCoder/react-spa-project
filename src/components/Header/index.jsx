import React,{useState} from "react";
import { Layout, Menu } from "antd";
import {
  // BrowserRouter as Router,
  Link
} from "react-router-dom";
import routerConfig from "../../config/router.config.js";
import "./style.less";

const { Header } = Layout;

const HeaderComponent = ()=>{
  const getPathKey = ()=>{
    return Object.keys(routerConfig).find((key)=>{
      const { path } = routerConfig[key];
      return new RegExp(path,"i").test(location.pathname);
    });
  };

  const getInitialSelectedKey = () => {
    const key = getPathKey();
    return key ? [key] : ["nav1"];
  };

  const [selectedkey,setSelectedKey] = useState(getInitialSelectedKey());

  const handleClick = ({key})=>{
    setSelectedKey([key]);
  };

  return <>
    <Header className="header-container">
      <div className="logo">Logo</div>
      <Menu
        theme="dark" 
        mode="horizontal" 
        selectedKeys={selectedkey}
        onClick={handleClick}
        open
      >
        {
          Object.keys(routerConfig).map((key)=>{
            const { path,name } = routerConfig[key];
            return (
              <Menu.Item key={key}>
                <Link to={path}>{name}</Link>
              </Menu.Item>
            );
          })
        }
      </Menu>
    </Header>
  </>;
};

export default HeaderComponent;