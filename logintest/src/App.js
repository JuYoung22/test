import React from 'react';
import './App.css';
import Login from './Login/login';
import { Route, BrowserRouter, Routes } from "react-router-dom"; // Routes를 import 추가

function App() {
    return(
      <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </div>   
      </BrowserRouter>
    );
  }

export default App;
