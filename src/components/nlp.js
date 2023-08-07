import React, { useState } from "react";
import nlp from "compromise";
import { TextField } from "@mui/material";

const TextProcessor = () => {
  const [inputText, setInputText] = useState("");
  const [processedText, setProcessedText] = useState("");

  const processText = () => {
    const processed = nlp(inputText, {
      whitespace: true,
      punctuation: true,
      contractions: false,
      unicode: false,
      //   acronyms: false,
      verbs: false,
      possessives: false,
    })
      .normalize()
      .out();
    setProcessedText(processed);
  };

  return (
    <div>
      <h1>Text Processor</h1>
      <div>
        <TextField
          type="text"
          style={{ width: "100%" }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text here..."
        />
        <button onClick={processText}>Process</button>
      </div>
      {processedText && (
        <div>
          <h2>Processed Text:</h2>
          <div>{processedText}</div>
        </div>
      )}
    </div>
  );
};

export default TextProcessor;
