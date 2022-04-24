import React from 'react';
import './App.css';
import Login from './components/js/login';
import Checkin from './components/js/Checkinbox';
import Forgotten from './components/js/Forgotten';
import Header from './components/js/Header';
import Reset from './components/js/Reset';
import Successful from './components/js/Successful';
import Selection from './components/js/selection'
// import { Switch, Route,  BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter as Routes, Route, } from 'react-router-dom';


function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Checkin /> */}
      {/* <Forgotten /> */}
      {/* <Reset /> */}
      {/* <Successful /> */}
      <Selection />
    </div>
    // <div>
    //     <Routes>
    //       <Route path="/" element={<Login/>}/>
    //       <Route exact path="selection" element={<Selection/>} />

    // </Routes>
    // </div>
    
  );
}

export default App;
