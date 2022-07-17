import React from "react";
import "./JokeCard.css";

const JokeCard = ({ joke, punchline, id, deleteJoke }) => {
  
  return (
    <div className="joke-card">
      <h2 className="joke">{joke}</h2>
      <p className="punchline">{punchline}</p>
      <button onClick={() => deleteJoke(id)}>Delete</button>
    </div>
  );
};

export default JokeCard;
