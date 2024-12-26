import React from "react";

function GuessInput({ onGuessSubmit }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        setGuess("");
        onGuessSubmit(guess);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
