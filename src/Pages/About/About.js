//import logo from './logo.svg';
//import './App.css';
import React, { Component } from "react";
import ImageBox from "../../Component/ImageBox/ImageBox";
import Navbar from "../../Component/Navbar/Navbar";
import mohit from "../../Assest/images/mohit.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2 className="mt-4 mb-4 ">About Demo Team</h2>
          <div className="row">
            <div className="col-md-6">
              <ImageBox
                img={"https://avatars.githubusercontent.com/u/30070810?v=4"}
                name={"Taha"}
                email={"taha-bin.aziz@informatik.hs-fulda.de"}
              />
            </div>
            <div className="col-md-6">
              <ImageBox img={""} name={"Dipesh"} email={""} />
            </div>
            <div className="col-md-6">
              <ImageBox
                img={mohit}
                name={"Mohit"}
                email={"mohit.dalal@informatik.hs-fulda.de"}
              />
            </div>
            <div className="col-md-6">
              <ImageBox img={""} name={"Hitesh"} email={""} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
