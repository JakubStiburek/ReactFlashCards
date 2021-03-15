import React, {useState} from "react"
import "./Flashcard.css"


const Flashcard = (props) => {
    console.log(props)
    const [frontSide, setFrontSide] = useState(true)
    const [showCard, setShowCard] = useState(true)
    // Click = switch the visible side
    const handleClick = () => {
        if(frontSide){
            setFrontSide(false)
        }
        else{
            setFrontSide(true)
        }
    }
    // Context menu click = erase the text
    // The parent div stays empty
    const handleErase = (event) => {
        event.preventDefault()
        setShowCard(false)
        props.onDelete(props.ID)
    }
    // Depending on the visible side set the visible text
    const setFace = () => {
        let face;
        if(frontSide){
            face = props.card.front
        }
        else{
            face = props.card.back
        }
        return face
    }

    return (
        <div className="card-wrapper">
            {showCard &&
                <div className="flashcard" onClick={handleClick} onContextMenu={handleErase}>
                    <p className="text">{setFace()}</p>
                </div>
            }
        </div>
    )
}

export default Flashcard