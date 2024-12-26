import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => {
        const result = checkGuess(
          guesses[index] ? guesses[index].text : undefined,
          answer
        );

        return <Guess key={index} result={result} />;
      })}
    </div>
  );
}

export default GuessResults;
