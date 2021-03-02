import React, {useState} from "react"
import "./RegisterrCard.css"

const RegisterCard = (props) => {
    // Get memory from props
    // Set state on input and memory
    const [input, setInput] = useState("")
    const [memory, setMemory] = useState(props.memory)
    // Store submitted text in memory then clean the input
    const handleSubmit = () => {
        memory.push(input)
        setMemory(memory)
        handleClear()
    }
    // Clear input
    const handleClear = () => {
        setInput("")
    }
    // Change input
    const handleInputChange = (event) => {
        setInput(event.target.value)
    }
    // When memory contains items format it to string
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