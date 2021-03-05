import React from "react"
import Flashcard from "../Flashcard/Flashcard";

const AddFlashcard = (props) => {
    const handleClick = () => {
        sendCard()
    }

    const makeEmptyCard = () => {
        return <Flashcard text={["", ""]}/>
    }

    const sendCard = () => {
        props.parentCallback(makeEmptyCard())
    }

    return (
        <div>
        <button onClick={handleClick}>Empty card</button>
        </div>
    )
}

export default AddFlashcard