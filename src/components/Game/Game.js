import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function submitGuess(guess) {
    const newGuess = {
      id: crypto.randomUUID(),
      text: guess,
    };

    const nextGuessResults = [...guesses, newGuess];

    setGuesses(nextGuessResults);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput onGuessSubmit={submitGuess} />
    </>
  );
}

export default Game;
