import React from "react";
import JokeCard from "../JokeCard/JokeCard";
import "./JokesContainer.css";

const JokesContainer = ({ jokes, deleteJoke }) => {
  const jokeCards = jokes.map((joke) => {
    return (
      <JokeCard
        key={joke.id}
        id={joke.id}
        joke={joke.joke}
        punchline={joke.punchline}
        deleteJoke={deleteJoke}
      />
    );
  });

  return <section className="jokes-container">{jokeCards}</section>;
};

export default JokesContainer;
