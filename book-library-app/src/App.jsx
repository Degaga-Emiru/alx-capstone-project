//import { useState } from 'react'
import './App.css'
import React from 'react';
import WelcomePage from './pages/WelcomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './Signup';
import { Login } from './Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/welcome' element={<WelcomePage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

