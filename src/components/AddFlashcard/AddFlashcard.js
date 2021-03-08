import React, {useState} from "react"
import Flashcard from "../Flashcard/Flashcard";

const AddFlashcard = (props) => {
    const [input, setInput] = useState(props.input)
    //TODO problem se statem, posledni state zustava a udela se karta navic
    const handleClick = () => {
        setInput(props.input)
        console.log(props.input)
        console.log(input)
        const card = <Flashcard key={input.front} text={input}/>
        props.parentCallback(card)
    }

    return (
        <div className="center">
        <button onClick={handleClick}>Make a card</button>
        </div>
    )
}

export default AddFlashcard