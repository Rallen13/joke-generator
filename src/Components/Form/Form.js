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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitJoke = (event) => {
    event.preventDefault();
    const newJoke = {
      id: Date.now(),
      ...this.state,
    };
    this.props.addJoke(newJoke);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ joke: "", punchline: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Joke"
          name="joke"
          value={this.state.joke}
          onChange={(event) => this.handleChange(event)}
        />

        <input
          type="text"
          placeholder="Punchline"
          name="punchline"
          value={this.state.punchline}
          onChange={(event) => this.handleChange(event)}
        />

        <button onClick={(event) => this.submitJoke(event)}>SUBMIT</button>
      </form>
    );
  }
}

export default Form;
