import React from "react";
import "./App.css";
import Login from "./components/js/login";
// import Checkin from './components/js/Checkinbox';
import Forgotten from "./components/js/Forgotten";
// import Reset from './components/js/Reset';
// import Successful from './components/js/Successful';
import Selection from "./components/js/selection";
import Payment from "./components/js/Payment";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="forgotten" element={<Forgotten />} />
        <Route exact path="selection" element={<Selection />} />
        <Route path="selection/payment" element={<Payment />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
