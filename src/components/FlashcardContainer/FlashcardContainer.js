import React, {useState} from "react"
import "./FlashcardContainer.css"
import Flashcard from "../Flashcard/Flashcard"

const FlashcardContainer = (props) => {
    const [cards, setCards] = useState("")
    const card = <Flashcard key={props.input.front} text={props.input}/>
    // Add a card with submitted input values
    const handleClick = () => {
        setCards([card, cards])
    }
    return(
        <div>
            <div className="center">
                <button onClick={handleClick}>Make a card</button>
            </div>
            <div id="cards">
                {cards}
            </div>
        </div>
    )
}

export default FlashcardContainer