import React, {useState, useEffect} from "react"
import "./FlashcardContainer.css"
import Flashcard from "../Flashcard/Flashcard"

const FlashcardContainer = (props) => {
    const [cards, setCards] = useState("")
    const card = <Flashcard key={props.input.front} text={props.input}/>
    // Add a card with submitted input values
    const handleClick = () => {
        setCards([card, cards])
    }
    // Clear empty cards after FlashcardContainer is rendered
    // TODO Finish this functionality
    const clearEmptyCards = () =>{

    }
    useEffect(clearEmptyCards)

    return(
        <div>
            <div className="center">
                <button onClick={handleClick}>Make a card</button>
            </div>
            <div id="instructions" className="center">
                <Flashcard key={"info01"} text={{front: "Left click", back: "Turns the card"}} />
                <Flashcard key={"info02"} text={{front: "Erase it", back: "With right click"}} />
                <Flashcard key={"info03"} text={{front: "Use the form above", back: "To add your own cards"}} />
                <Flashcard key={"info04"} text={{front: "And have", back: "fun"}} />
            </div>
            <div id="cards">
                {cards}
            </div>
        </div>
    )
}

export default FlashcardContainer