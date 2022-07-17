import React from "react";
import "./JokeCard.css";

const JokeCard = ({ joke, punchline }) => {
  return (
    <div className="joke-card">
      <h2 className="joke">{joke}</h2>
      <p className="punchline">{punchline}</p>
    </div>
  );
};

export default JokeCard;
