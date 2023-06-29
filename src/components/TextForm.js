import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("converted to uppercase","success")
    } 
    
    const handleLoClick=()=>{
       let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("converted to lowercase","success")
    } 
    
    const handleClearClick=()=>{
       let newText=""
        setText(newText)
        props.showAlert("text has been clear","success")
    } 
    const handleCopy=()=>{
      // console.log("i am copy");
      let text=document.getElementById("myBox")
      text.select()
    
      navigator.clipboard.writeText(text.value)
      props.showAlert("text has been copy","success")
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("extra spaces has been removed","success")
    }
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value)
       
    }
    const [text,setText]=useState("")
//    setText("new text")
  return (
    <>
    <div className='container my-3' style={{color:props.Mode==="dark"?"white":"black"}}>
     <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor:props.Mode==="dark"?"grey":"white",color:props.Mode==="dark"?"white":"black"}} onChange={handleOnChange}></textarea>
</div>

<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
<button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.Mode==="dark"?"white":"black"}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here" }</p>
    </div>
    </>
  )
}
