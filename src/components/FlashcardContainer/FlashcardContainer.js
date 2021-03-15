import React, {useState} from "react"
import "./FlashcardContainer.css"
import Flashcard from "../Flashcard/Flashcard"

const FlashcardContainer = ({input}) => {
    const defaultCards = [
        {front: "Left click", back: "Turns the card", isDeleted: false},
        {front: "Erase it", back: "With right click", isDeleted: false},
        {front: "Use the form above", back: "To add your own cards", isDeleted: false},
        {front: "And have", back: "Fun", isDeleted: false}
    ]

    const [cards, setCards] = useState(defaultCards)
    // Add a card with submitted input values
    const handleClick = () => {
        setCards([...cards, {front: input.front, back: input.back, isDeleted: false}])
        console.log({cards})
    }
    // Clear empty cards
    const clearEmptyCards = () => {
        const clearedCards = cards.filter(card => card.isDeleted === false)
        setCards(clearedCards)
        console.log({cards})
    }
    // Empty card
    const deleteCard = (key) => () =>{
        let mutatedCards = cards
        mutatedCards[key].isDeleted = true
        setCards(mutatedCards)
    }
    return(
        <div>
            <div className="center">
                <button onClick={handleClick}>Make a card</button>
                <button onClick={clearEmptyCards}>Clear empty spaces</button>
            </div>
            <div id="cards">
                {cards.map((card, key) => {
                    return <Flashcard key={key} ID={key} card={card} onDelete={deleteCard(key)}/>
                })}
            </div>
        </div>
    )
}

export default FlashcardContainer