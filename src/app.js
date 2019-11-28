import React,{PureComponent} from 'react';
import ReactDOM from 'react-dom-router';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

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

export default ReactDOM.render(<App/>,window.document.getElementById('app'))