import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/root.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Gallery from './pages/Gallery';
import Admin from './pages/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path = "/profil" element = {<Profile/>}/> 
        <Route path="/galerie" element={<Gallery/>} />
        <Route path = "/admin" element = {<Admin/>}/>

      </Routes>
    </Router>
  </React.StrictMode>
);

