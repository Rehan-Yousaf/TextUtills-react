import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
   
    // text = "Enter the text" // if we want to update the text variabe then we can't do this in react

    // setText("Enter text")           // we have to use setText function to update , like this
    const handleupclick = ()=>{
            let updatedText = text.toUpperCase()
             setText(updatedText)
         props.showAlert("Text converted to uppercase","success")        
    }
    const handlelowclick = () => {
            let updatedText = text.toLowerCase()
             setText(updatedText)
         props.showAlert("Text converted to lowercase","success")

    }
    const handleCopyclick=()=>{
        navigator.clipboard.writeText(text)
    props.showAlert("Text Copied to clipboard","success")
    }
    const handleClearclick = () => {
            let updatedText = ""
             setText(updatedText)
         props.showAlert("Text cleared","success")
        }
    const handleRemoveExtraSpaces = () => {
            let TempText = text.split(/\s+/) 
             setText(TempText.join(" "))
         props.showAlert("Extra spaces removed","success")
        }
    
    

    let onChangeHandler = (event) => {

        setText(event.target.value)              // in react, when we specify a value of textarea then we have to make a function of onChange which will call on changing the value in textarea    and we have to manually allow the changing in textarea value like this      otherwise it will not allow to change the value of textarea.
    }
    return (
        
        <>
        <div>
            <div className="mb-3 my-3">
        
                {/* <label htmlFor="text" className="form-label">{props.heading}</label> */}
                <textarea style={{background:`${props.mode==="light"? "white":"#a7a5a5"}` , color:`${props.mode==="light"? "black":"white"}`}} placeholder='Enter Text here' value={text} className="form-control" id="text" rows="3" onChange={onChangeHandler} ></textarea>
            </div>
            <button disabled={text.length===0} onClick={handleupclick} className='btn btn-primary mx-2 my-1'> Convert to Upper case</button>
            <button disabled={text.length===0} onClick={handlelowclick} className='btn btn-primary mx-2 my-1'> Convert to Lower case</button>
            <button disabled={text.length===0} onClick={handleClearclick} className='btn btn-primary mx-2 my-1'> Clear</button>
            <button disabled={text.length===0} onClick={handleCopyclick} className='btn btn-primary mx-2 my-1'> Copy</button>
            <button disabled={text.length===0} onClick={handleRemoveExtraSpaces} className='btn btn-primary mx-2 my-1'> Remove extra spaces</button>
        </div>
        <div style={{ color:`${props.mode==="light"? "black":"white"}` }} className="container my-3">
            <h3>Text Summary</h3>
        {/* {words(text).word}
        {words(text).sentence} */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p> {0.004 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <p> {text.split(".").filter((element)=>{return element.length!==0}).length} Sentences</p>
            <h4>Preview</h4>
            <p>{text.length>0? text: "Enter your text above to see preview" }</p>
        </div>
        </>
    )
    }
