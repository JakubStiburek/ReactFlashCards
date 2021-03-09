import React, {useState} from "react"
import Flashcard from "../Flashcard/Flashcard";

const AddFlashcard = (props) => {
    const handleClick = () => {
        const card = <Flashcard key={props.input.front} text={props.input}/>
        props.parentCallback(card)
    }

    return (
        <div className="center">
        <button onClick={handleClick}>Make a card</button>
        </div>
    )
}

export default AddFlashcard