import React,{PureComponent} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from "./components/NotFound/index.jsx";
import Home from "./pages/Home/index.jsx";

class App extends PureComponent{
  render(){
    return (<Router basename="">
      <Switch>
        <Route path='/' component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>);
  }
}

export default ReactDOM.render(<App/>,window.document.getElementById("app"));