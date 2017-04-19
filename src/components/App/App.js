import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    var footerText = 'Really cool footer!';
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Jake's first react app</h2>
        </div>
        <p className="App-intro">
          wooohooo!
        </p>
        <Footer text={footerText} />
      </div>
    );
  }
}

export default App;
