import React,{ useState, useEffect } from 'react';
import './App.css';
import Join from './user/join';
import Profile from './user/profile';
import { Route, BrowserRouter, Routes  } from "react-router-dom"; // Routes를 import 추가

function App() {
  
  

  return(
      <BrowserRouter>
      <div className='App'>
         {/* 로그인 상태에 따른 컴포넌트 렌더링 */}
        <Routes>
          <Route path='/' element={<Join />} />  
            <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>   
      </BrowserRouter>
    );
  }

export default App;
