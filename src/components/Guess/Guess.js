import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((_, index) => (
        <span key={index} className="cell">
          {guess ? guess.text[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
