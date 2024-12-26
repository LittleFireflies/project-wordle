import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ result }) {
  return (
    <p className="guess">
      {range(5).map((_, index) => {
        const className = result ? `cell ${result[index].status}` : "cell";
        return (
          <span key={index} className={className}>
            {result ? result[index].letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
