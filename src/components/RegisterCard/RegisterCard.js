import React, {useState} from "react"
import "./RegisterrCard.css"

const RegisterCard = (props) => {
    const [input, setInput] = useState("")
    const [memory, setMemory] = useState(props.memory)
    const handleSubmit = () => {
        memory.push(input)
        setMemory(memory)
        handleClear()
    }
    const handleClear = () => {
        setInput("")
    }
    const handleInputChange = (event) => {
        setInput(event.target.value)
    }
    const formatMemory = () => {
        if(memory.length > 0) {
            const newMemory = memory.join(", ")
            return newMemory.toUpperCase()
        }
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClear}>Clear</button>
            {formatMemory()}
        </div>
    )
}

export default RegisterCard