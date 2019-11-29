import {PureComponent} from "react";
import * as ReactDOM from "react-router-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";

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