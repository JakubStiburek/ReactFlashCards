import React, {useState} from "react"
import Flashcard from "../Flashcard/Flashcard";

const AddFlashcard = (props) => {
    const [input, setInput] = useState({front: "prazdno", back: "empty"})

    const handleClick = () => {
        sendCard()
    }

    const makeCard = () => {
        setInput(props.input)
        return <Flashcard text={input}/>
    }

    const sendCard = () => {
        props.parentCallback(makeCard())
    }

    return (
        <div>
        <button onClick={handleClick}>Make a card</button>
        </div>
    )
}

export default AddFlashcard