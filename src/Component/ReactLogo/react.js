import React,{Component} from "react";
import logo from "./logo.svg";
import './react.css'
class Logo extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="" >Class Based Component</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>React.js</h3>
        </header>
      </div>
    );
  }
}

export default Logo;
