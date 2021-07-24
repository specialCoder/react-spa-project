import React,{ useState, useContext, useMemo} from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import routerConfig from "../../config/router.config";
import { MyContext } from '../../contexts';
import { GlobalContextType } from '../../types'
import "./style.less";
import { getDefaultPath, getRouteInfo } from '../../utils/route';
import { getPageAuth } from '../../utils/permission';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header } = Layout;

const HeaderComponent = () => {
  const context = (useContext(MyContext) || {}) as GlobalContextType;

  const getInitialSelectedKey = () => {
    const path = getRouteInfo(location.pathname)[0] || ''; // antd menu支持只传入子路径定位多级菜单
    const defaultPath = getDefaultPath();
    return path ? [path] : [defaultPath];
  };

  const [selectedkey,setSelectedKey] = useState(getInitialSelectedKey());

  const handleClick = ({ keyPath }:any)=>{
    setSelectedKey(keyPath);
  };

  const renderItems = (routerConfig:any) => {
    return Object.keys(routerConfig)
    .filter((key) => { // 仅显示有权限的页面
      const config = (routerConfig[key] || {});
      const {path, isShowInRoute = true} = config;
      return isShowInRoute && getPageAuth(path, context);
    }).
    map((parentKey, index) => {
      const parent = routerConfig[parentKey];
      const { children, title, path} = parent;
      if(children){
        return <SubMenu key={`${path}-${index}`} title={title}>
          { renderItems(children)}
        </SubMenu>
      }else{
        return <Menu.Item key={`${path}`}>
          <Link to={path}>{ title }</Link>
        </Menu.Item>
      }
    })
  }

  const userName = useMemo(() => {
    return context.ldapId || '';
  }, [context.ldapId])


  return <>
    <Header className="header-container">
      <div className="header-content">
        <div className="logo">Santa</div>
        <Menu
          theme="dark" 
          mode="horizontal" 
          selectedKeys={selectedkey}
          onClick={handleClick}
        >
          { renderItems(routerConfig) }
        </Menu>
      </div>
      <div className="user-name">{ userName }</div>
    </Header>
  </>;
};

export default HeaderComponent;