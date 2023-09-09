import React from 'react';
import './App.css';
import Login from './Login/login';
import { Route, BrowserRouter, Routes } from "react-router-dom"; // Routes를 import 추가

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3001')
    .then(res=>res.json())
    .then(data=>this.setState({username: data.username}))
  }
  constructor(props) {
    super(props);
    this.state = {
      username:null
    };
  }
  render() {
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
}

export default App;
