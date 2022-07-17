import React from "react";
import "./JokesContainer.css";

const JokesContainer = ({ jokes }) => {
  const jokeCards = jokes.map((joke) => {
    return (
      <div>
        <h2>{joke.joke}</h2>
        <p>{joke.punchline}</p>
      </div>
    );
  });

  return <section className="jokes-container">{jokeCards}</section>;
};

export default JokesContainer;
