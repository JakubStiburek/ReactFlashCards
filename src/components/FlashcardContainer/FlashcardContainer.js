import React, {useState} from "react"
import "./FlashcardContainer.css"
import Flashcard from "../Flashcard/Flashcard"
import AddFlashcard from "../AddFlashcard/AddFlashcard";

const FlashcardContainer = (props) => {
    const [cards, setCards] = useState("")
    const getCard = (childData) => {
        setCards([cards, childData])
    }

    return(
        <div>
            <AddFlashcard parentCallback={getCard} input={props.input}/>
            <div id="cards">
                {cards}
                <Flashcard text={{front: "ahoj", back:"hi"}}/>
            </div>
        </div>
    )
}

export default FlashcardContainer