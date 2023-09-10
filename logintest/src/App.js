import React from 'react';
import './App.css';
import Login from './Login/login';
import Profile from './Login/profile';
import { Route, BrowserRouter, Routes } from "react-router-dom"; // Routes를 import 추가

function App() {
    return(
      <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>   
      </BrowserRouter>
    );
  }

export default App;
