import React, {useState} from "react"
import "./FlashcardContainer.css"
import Flashcard from "../Flashcard/Flashcard"
import AddFlashcard from "../AddFlashcard/AddFlashcard";

const FlashcardContainer = () => {
    const [emptyCard, setEmptyCard] = useState("")
    const getEmptyCard = (childData) => {
        setEmptyCard([emptyCard, childData])
    }


    return(
        <div>
            <AddFlashcard parentCallback={getEmptyCard}/>
            {emptyCard}
            <Flashcard text={["ahoj", "hi"]}/>
        </div>
    )
}

export default FlashcardContainer