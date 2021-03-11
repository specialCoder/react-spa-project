import React,{PureComponent} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from "./components/NotFound/index.jsx";
import { Layout } from "antd";
import AppHeader from "components/Header/index.jsx";
import "antd/dist/antd.css";
import ClassPage from "pages/ClassPage/index.jsx";
// import HookPage from "pages/HookPage/index.jsx";
import BlinkPage from "pages/test/BlinkRender.jsx";

class App extends PureComponent{
  render(){
    return (
      <Layout>
        <Router basename="">
          <AppHeader/>
          <Layout>
            <Switch>
              <Route exact path='/'><ClassPage /></Route>
              <Route path='/nav1'><ClassPage /></Route>
              <Route path='/nav2'><BlinkPage /></Route>
              <Route><NotFound /></Route>
            </Switch>
          </Layout>
        </Router>
      </Layout>);
  }
}

export default ReactDOM.render(<App/>,window.document.getElementById("app"));