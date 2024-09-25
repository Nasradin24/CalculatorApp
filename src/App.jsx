import React, { useState } from "react";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      setResult(eval(input) || "Error"); 
      setInput("");
    } else if (value === "C") {
      setInput(""); 
      setResult("");
    } else {
      setInput(input + value);
    }
  };
  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
