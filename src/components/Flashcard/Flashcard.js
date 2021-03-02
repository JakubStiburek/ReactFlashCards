import React, {useState} from "react"


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
            face = text[0]
        }
        else{
            face = text[1]
        }
        return face
    }

    console.log(setFace())
    console.log(frontSide)

    return (
        <div onClick={handleClick} onContextMenu={handleErase}>
            <p>{setFace()}</p>
        </div>
    )
}

export default Flashcard