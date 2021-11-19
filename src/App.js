import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import TodoApp from "./Pages/Projects/TodoApp";

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/todo-app" element={<TodoApp />} />
          </Routes>
        </div>
      </Router>
      </>
    );
  }
}

export default App;
