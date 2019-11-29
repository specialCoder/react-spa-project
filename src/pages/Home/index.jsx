import React,{PureComponent} from "react";
import "./style.less";

class Home extends PureComponent{
  
  state={
    name:"namexxx"
  }

  handleClick=()=>{
    console.log("onclick this.state.name-------->",this.state.name);
  }

  render(){
    return <div>
      <h1 onClick={this.handleClick}>Home</h1>
    </div>;
  }
}

export default Home;