import React, { useState } from "react";
import compromise from "compromise";

const ParaphrasingComponent = () => {
  const [inputText, setInputText] = useState("");
  const [paraphrasedText, setParaphrasedText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const paraphraseText = async () => {
    // Process the input text using the compromise library
    const doc = compromise(inputText);

    // Perform synonym replacement on verbs and nouns
    doc.verbs().toInfinitive();
    doc.nouns().toSingular();

    // Get the paraphrased text using text() with callback
    try {
      // Get the paraphrased text using text() with await
      const newText = await doc.text();
      setParaphrasedText(newText);
    } catch (error) {
      console.error("Error paraphrasing text:", error);
    }
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text to paraphrase"
      />

      <button onClick={paraphraseText}>Paraphrase</button>

      <div>
        <h3>Paraphrased Text:</h3>
        <p>{paraphrasedText}</p>
      </div>
    </div>
  );
};

export default ParaphrasingComponent;
