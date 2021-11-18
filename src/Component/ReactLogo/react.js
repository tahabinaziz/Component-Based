import React,{Component} from "react";
import logo from "./logo.svg";
import './react.css'
class Logo extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          
          <div className="row">
            <div className="col-md-3">
          <p className="" >What is functional based component?</p>  
            </div>
            <div className="col-md-6">
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-md-3">
            <p className="" >What is class based component?</p>
            </div>
          </div>
          
          <h3>React.js</h3>
        </header>
      </div>
    );
  }
}

export default Logo;
