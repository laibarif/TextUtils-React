import React, { useState } from "react";

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log('On click is clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE","success");
    }

    const handleDownClick = ()=>{
        // console.log('On click is clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleClearClick = ()=>{
        // console.log('On click is clicked' + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces are Removed","success");
    }

    const handleOnChange = (event)=>{
        // console.log('On Change');
        setText(event.target.value);
    }

  const [text, setText] = useState('Enter Text Here');
  return (
    <>
        <div className="container" style={{color: props.mode=== 'dark'? 'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value= {text} onClick={handleClearClick} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'? 'grey':'white', color: props.mode=== 'dark'? 'white':'#042743'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div> 
        <div className="container" my-3 style={{color: props.mode=== 'dark'? 'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Minutes to read Text : {0.008 * text.split(" ").length}</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Text To Preview"}</p>
        </div>
    </>
  );
}
