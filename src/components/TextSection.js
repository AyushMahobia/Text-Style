import React, { useState } from 'react';

export default function TextSection(props) {
    // handling on-change event in text area
    // so that we can type in the text area
    const changeText = (event) => {
        // console.log(ele);
        setText(event.target.value)
    }

    //changing the text to upperCase/lowercase Letter
    const upperCase = () => {
        var newText = text.toUpperCase();
        setText(newText)
        if (text.length != 0)
            props.showAlert("Text case changes to upper case letter", "warning")
    }
    const lowerCase = () => {
        var newText = text.toLowerCase();
        setText(newText)
        if (text.length != 0)
            props.showAlert("Text case changes to lower case letter", "warning")
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        if (text.length != 0)
            props.showAlert("Text copied Succesfully", "success")
    }
    const clearCase = () => {
        var newText = "";
        setText(newText)
    }
    const extraSpace = () => {
        var str = text;
        str = str.replace(/ +(?= )/g, '');
        setText(str)
        if (text.length != 0)
            props.showAlert("Removed extra spaces", "primary")
    }
    const binaryCase = () => {
        let str = text;
        let res = '';
        res = str.split('').map(char => {
            return char.charCodeAt(0).toString(2);
        }).join(' ')
        setText(res)
        if (text.length != 0)
            props.showAlert("Converted to Binary", "secondary")
    }
    // using hook ie. useState
    const [text, setText] = useState("");

    return (
        <>
            <div className={`container text-${props.mode === "light" ? "dark" : "light"}`}>
                <div className="mb-3">
                    <h2>Write some text</h2>
                    <textarea className="form-control" style={{
                        background: props.mode === "light" ? "white" : "#06112e",
                        color: props.mode === "light" ? "black" : "white"
                    }} value={text} onChange={changeText} id="box" placeholder='Enter any text' rows="8"></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={upperCase}>Upper Case</button>
                <button disabled = {text.length === 0} className="btn btn-success mx-2 my-1" onClick={lowerCase}>Lower Case</button>
                <button disabled = {text.length === 0} className="btn btn-warning mx-2 my-1" onClick={binaryCase}>Binary Case</button>
                <button disabled = {text.length === 0} className="btn btn-info mx-2 my-1" onClick={extraSpace}>Remove Extra Space</button>
                <button disabled = {text.length === 0} className="btn btn-secondary mx-2 my-1" onClick={copyText}>Copy Text</button>
                <button disabled = {text.length === 0} className="btn btn-danger mx-2 my-1" onClick={clearCase}>Clear</button>
            </div>
            <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
                <h4>Number of word :  <strong>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</strong></h4>
                <h4>Number of character :  <strong>{text.length - text.split(" ").length + 1}</strong></h4>
            </div>
            <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`} style={{
                overflow: "hidden"
            }}>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Some Text"}</p>
            </div>
        </>
    )
}
