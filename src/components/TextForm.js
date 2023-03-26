import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick =()=>{
       // console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange =(event)=>{
       // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
    <div className='container'>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
    </div>
    <div className="container my-2">
        <h1>Your test summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes reads</p>
    </div>
    </>
  )
}
