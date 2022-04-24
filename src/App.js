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
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App() {
  return (
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='forgotten' element={<Forgotten/>}/>
          <Route exact path="selection" element={<Selection/>} />

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
