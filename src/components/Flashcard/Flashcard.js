import React, {useState} from "react"
import "./Flashcard.css"


const Flashcard = (props) => {
    // Set state on text and front side of the card
    let [text, setText] = useState(props.text)
    const [frontSide, setFrontSide] = useState(true)
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
        setText("")
    }
    // Depending on the visible side set the visible text
    const setFace = () => {
        let face;
        if(frontSide){
            face = text.front
        }
        else{
            face = text.back
        }
        return face
    }

    return (
        <div className="flashcard" onClick={handleClick} onContextMenu={handleErase}>
            <p className="text">{setFace()}</p>
        </div>
    )
}

export default Flashcard