import React, {useState} from "react"
import "./Flashcard.css"


const Flashcard = (props) => {
    const [frontSide, setFrontSide] = useState(true)
    const [showCard, setShowCard] = useState(true)
    // Click = switch the visible side
    const handleClick = () => {
        if(frontSide === true){
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
    }
    // Depending on the visible side set the visible text
    const setFace = () => {
        let face;
        if(frontSide){
            face = props.text.front
        }
        else{
            face = props.text.back
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