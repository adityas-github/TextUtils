import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here");
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleLowclick = () => {
    setText(text.toLowerCase());
  };
  const handleClearClick = () => {
    setText("");
  };
 
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className=" my-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={() => handleUpClick()}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear Text
        </button>
        {/* <button className="btn btn-primary mx-2" onClick={handlePascalClick}>
          Convert to PascalCase
        </button> */}
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes required to read</p>
        <h2>Preview:</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
