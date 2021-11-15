//import logo from './logo.svg';
//import './App.css';
import React,{ Component } from 'react';
import Logo from '../../Component/ReactLogo/react';
import Navbar from '../../Component/Navbar/Navbar';


class Home extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Logo/>
        
      </div>
    )
  }
}

export default Home;
