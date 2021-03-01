import React, {useState} from "react"
import "./RegisterrCard.css"

const RegisterCard = (props) => {
    const [input, setInput] = useState("")
    const handleSubmit = () => {
        props.memory.push(input)
        console.log(props.memory)
    }
    const handleClear = () => {
        setInput("")
    }
    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    )
}

export default RegisterCard