import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [
        {
          id: 1,
          joke: "What do you get when you cross a snail with a porcupine?",
          punchline: "A slowpoke!",
        },
        {
          id: 2,
          joke: "What kind of tree can fit in one hand?",
          punchline: "A palm tree!",
        },
        {
          id: 3,
          joke: "How do they keep the basketball arena cool?",
          punchline: "THey fill it with fans!",
        },
      ],
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
