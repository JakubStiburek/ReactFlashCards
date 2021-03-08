import React, {useState} from "react"
import "./CardInput.css"

const CardInput = (props) => {
    const [input, setInput] = useState("")
    // Change input value
    const handleInputChange = (event) => {
        setInput(event.target.value)
    }
    // Clear input field
    const handleClear = () => {
        setInput("")
    }
    // Parent callback - send input data out
    const sendInput = () => {
        props.parentCallback(input)
    }
    // Trigger submit
    const handleSubmit = () => {
        sendInput()
    }

    return (
        <div className="center">
            <label>{props.label}</label>
            <input type="text" value={input} placeholder={props.placeholder} onChange={handleInputChange}/>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default CardInput