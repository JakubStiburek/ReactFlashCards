import React, {useState} from "react"
import "./RegisterrCard.css"

const RegisterCard = (props) => {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const clearInput = () => {
        setInputValue("")
    }

    const list = [];

    const handleClick = () => {
        list.push(inputValue)
        console.log(list)
        clearInput()
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange}></input>
            <button onClick={handleClick}>Submit</button>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default RegisterCard