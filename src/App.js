import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
			This is my first "Hello World"
		</p>
		<div className="round-button">
			<div className="round-button-circle">
				</div>
		</div>
      </div>
    );
  }
}

export default App;
