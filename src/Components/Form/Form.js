import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      joke: "",
      punchline: "",
    };
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Joke"
          name="joke"
          value={this.state.joke}
        />

        <input
          type="text"
          placeholder="Punchline"
          name="punchline"
          value={this.state.punchline}
        />

        <button>SUBMIT</button>
      </form>
    );
  }
}

export default Form;
