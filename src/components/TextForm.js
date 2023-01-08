import React, { useState } from "react";

export default function TextFrorm(props) {

  const handleOnChange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
  };

  const handleUpCLick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('success','converted to upper case')
  };

  const handleLoCLick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert('success','converted to lower case')
  };

  const handleClearCLick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert('success','converted to cleared text')
  };
  
  const handleMlCLick = () => {
    let newtext = text + text;
    setText(newtext);
    props.showAlert('success','converted to multiply text')
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" >
        <h1>
          {props.heading}
        </h1>
        <div className="mb-4">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            // style={{ backgroundColor : (props.mode === 'dark' ? 'white' : 'grey'), color : 'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpCLick}>
          UpperCase IT
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoCLick}>
          LowerCase IT
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearCLick}>
          Clear IT
        </button>
        <button className="btn btn-primary mx-2" onClick={handleMlCLick}>
          Multiply IT
        </button>
      </div>
      <div className="container my-2" >
        <h1 >Your Input Text Summary </h1>
        <p>{text.split(" ").length} Words && {text.length} Characters</p>
        <h2>Preview</h2>
        <p> {text.length===0?'Enter some text for preview':text}</p>
      </div>
    </>
  );
}
