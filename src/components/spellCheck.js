import React, { useState } from "react";
import Typo from "typo-js";

const SpellChecker = () => {
  const [inputText, setInputText] = useState("");
  const [correctedText, setCorrectedText] = useState("");

  const correctSpelling = (sentence) => {
    const dictionary = new Typo("en_US"); // Load the English (US) dictionary

    // Split the sentence into words, correct each word, and join them back
    const correctedSentence = sentence
      .split(/\b/)
      .map((word) =>
        dictionary.check(word) ? word : dictionary.suggest(word)[0] || word
      )
      .join("");

    return correctedSentence;
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSpellCheck = () => {
    const corrected = correctSpelling(inputText);
    setCorrectedText(corrected);
  };

  return (
    <div>
      <h1>Spell Checker</h1>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter a sentence..."
        />
        <button onClick={handleSpellCheck}>Check Spelling</button>
      </div>
      {correctedText && (
        <div>
          <h2>Corrected Text:</h2>
          <div>{correctedText}</div>
        </div>
      )}
    </div>
  );
};

export default SpellChecker;
