import './App.css';
import React,{ Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './Pages/Home/Home';
import  Portfolio from './Pages/Portfolio/Portfolio'

class App extends Component{
  render(){
    return(
      <Router>
      <div className="s">
        <Routes>
          
          <Route path='/' element={<Home/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          
        </Routes>
      </div>
    </Router>
    );
  }
}

export default App;
