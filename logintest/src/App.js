import React from 'react';
import './App.css';

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
    const {username} = this.state;
    return(
      <div className='App'>
        <header className='App-header'>
          {username ? `Hello ${username}`: 'HelloWorld'};
        </header>
      </div>
    );
  }
}

export default App;
