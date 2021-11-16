//import logo from './logo.svg';
//import './App.css';
import React, { Component } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Card from "../../Component/Card/Card";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2 className="mt-4 mb-4">Projects</h2>
          <div className="row">
          <Card 
          img={"https://seekoman.com/static/media/seekoman-final-logo.62ccd8ac.png"}
          title={"SeekOman"}
          smallText={"Hiring Teachers For Internation Schools in Oman"}
          siteLink={"https://seekoman.com/"}

          />
          <Card 
          img={"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"}
          title={"SeekOman"}
          smallText={"Hiring Teachers For Internation Schools in Oman"}
          siteLink={"https://seekoman.com/"}

          />
          
        </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
