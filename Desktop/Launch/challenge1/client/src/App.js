
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './searchbar';
import './style.css';
class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server
  callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo"/>
          <p></p>
          <Searchbar/>
          <h1 className="App-title">{this.state.data}</h1>
        </header>
      </div>
    );
  }
}

export default App;