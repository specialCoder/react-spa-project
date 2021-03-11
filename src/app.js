import React,{PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Layout, ConfigProvider } from 'antd';
import NotFound from 'components/NotFound';
import AppHeader from 'components/Header';
import Home from 'pages/Home';
import BlinkPage from 'pages/test/BlinkRender.jsx';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import './app.less';
class App extends PureComponent{
  render(){
    return (<ConfigProvider locale={zhCN}>
      <Router basename="">
        <AppHeader/>
        <Layout style={{ flex:1 }}>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/nav1'><Home /></Route>
            <Route path='/nav2'><BlinkPage /></Route>
            <Route><NotFound /></Route>
          </Switch>
        </Layout>
      </Router>
    </ConfigProvider>);
  }
}

export default ReactDOM.render(<App/>,window.document.getElementById('app'));