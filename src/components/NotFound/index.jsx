import React,{PureComponent} from "react";
import "./style.less";

class NotFound extends PureComponent{
  constructor(props){
    super(props);
    this.state={

    };
  }
  render(){
    return <div>
      <h1>404 Resource Not Found</h1>
    </div>;
  }
}

export default NotFound;