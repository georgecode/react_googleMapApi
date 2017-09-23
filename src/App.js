import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import XGoogleMap from './components/googleMaps'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <XGoogleMap />
      </div>
    );
  }
}

export default App;
