import React, { useState } from 'react';
import { 
  Layout, 
  Menu, 
  Breadcrumb 
} from 'antd';
import { 
  AppstoreOutlined, 
  MailOutlined, 
  SettingOutlined 
} from '@ant-design/icons';
import './style.less';

const { SubMenu } = Menu;
const { Sider } = Layout;

const Home = () => {
  const [keyPath, setKeypath] = useState(['1','sub1']);
  const [collapsed,setCollapsed] = useState(false);

  const handleClick = ({ key, keyPath}) => {
    console.log('click ', keyPath);
    setKeypath(keyPath);
  };

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <div className="home-wrapper">
      <Sider 
        collapsible
        theme="light"
        collapsed={collapsed} 
        onCollapse={onCollapse}
      >
        <Menu
          onClick={handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <div className="home-content">
        <Breadcrumb className="home-breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="home-content-layout">

        </Layout>
      </div>
    </div>);
};

export default React.memo(Home);