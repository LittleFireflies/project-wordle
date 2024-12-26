import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import LostBanner from "../LostBanner/LostBanner";
import WinBanner from "../WinBanner/WinBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("inGame");

  function submitGuess(guess) {
    const newGuess = {
      id: crypto.randomUUID(),
      text: guess,
    };

    const nextGuessResults = [...guesses, newGuess];

    setGuesses(nextGuessResults);

    // Check game status
    if (guess === answer) {
      setStatus("win");
    } else if (nextGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput onGuessSubmit={submitGuess} disabled={status !== "inGame"} />
      {status === "lost" && <LostBanner answer={answer} />}
      {status === "win" && <WinBanner guessCount={guesses.length} />}
    </>
  );
}

export default Game;
