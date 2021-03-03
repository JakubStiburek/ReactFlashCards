import React from "react"
import "./FlashcardContainer.css"
import Flashcard from "../Flashcard/Flashcard"

const FlashcardContainer = () => {
    return(
        <div>
            <Flashcard text={["ahoj", "hi"]}/>
        </div>
    )
}

export default FlashcardContainer