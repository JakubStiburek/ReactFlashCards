import React, {useState} from "react"


const Flashcard = (props) => {
    const frontText = props.text[0]
    const backText = props.text[1]
    const [side, setSide] = useState(true)

    const handleClick = () => {
        if(side === true){
            setSide(false)
        }
        else{
            setSide(true)
        }
    }

    const setFace = () => {
        let face;
        if(side){
            face = frontText
        }
        else{
            face = backText
        }
        return face
    }

    console.log(setFace())
    console.log(side)

    return (
        <div onClick={handleClick}>{setFace()}</div>
    )
}

export default Flashcard