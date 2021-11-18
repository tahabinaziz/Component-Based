import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            <img
              style={{ height: "25px", width: "auto" }}
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt=""
            />
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarNav"
            style={{ justifyContent: "right" }}
          >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <NavLink className="navbar-brand" to="/">
                  Home <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="navbar-brand" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="navbar-brand" to="/about">
                  About Us
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="navbar-brand" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
