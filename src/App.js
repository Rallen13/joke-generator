import React, { Component } from "react";

import "./App.css";
import Form from "./Components/Form/Form";
import JokesContainer from "./Components/JokesContainer/JokesContainer";

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

  addJoke = (newJoke) => {
    this.setState({ jokes: [...this.state.jokes, newJoke] });
  };

  deleteJoke = (id) => {
    const filteredJokes = this.state.jokes.filter((joke) => joke.id !== id);

    this.setState({ jokes: filteredJokes });
  };

  render() {
    return (
      <main className="App">
        <h1>Joke Generator</h1>
        {!this.state.jokes.length && <h2>No jokes yet -- add some!</h2>}
        <Form addJoke={this.addJoke} />
        <JokesContainer jokes={this.state.jokes} deleteJoke={this.deleteJoke} />
      </main>
    );
  }
}

export default App;
