import React from "react";
import JokeCard from "../JokeCard/JokeCard";
import "./JokesContainer.css";

const JokesContainer = ({jokes}) => {
  console.log(jokes)
  const jokeCards = jokes.map((joke) => {
    return <JokeCard key={joke.id} joke={joke.joke} punchline={joke.punchline}/>;
  });

  return <section className="jokes-container">{jokeCards}</section>;
};

export default JokesContainer;
