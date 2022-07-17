import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
    };
  }

  render() {
    return (
      <main className="App">
        <h1>Joke Generator</h1>
        <p>Hi!</p>
      </main>
    );
  }
}

export default App;
