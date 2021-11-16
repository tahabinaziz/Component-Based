//import logo from './logo.svg';
//import './App.css';
import React, { Component } from "react";
import Navbar from "../../Component/Navbar/Navbar";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2 className="mt-4 mb-4">Contact</h2>
        </div>
      </div>
    );
  }
}

export default Contact;
