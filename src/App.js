// Components & etc. block
import React, { Component } from 'react';
import Game from "./Components/Game";
// CSS block
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Game/>
      </div>
    );
  }
}

export default App;
