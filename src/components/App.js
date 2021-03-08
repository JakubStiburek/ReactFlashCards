import React, {useState} from "react"
import CardInput from "./CardInput/CardInput"
import FlashcardContainer from "./FlashcardContainer/FlashcardContainer";

const App = () => {
    const [inputData, setInputData] = useState({front: "", back: ""})
    // Harvest data from input
    const getInputFront = (childData) => {
        setInputData({front: childData, back: inputData.back})
    }
    const getInputBack = (childData) => {
        setInputData({front: inputData.front, back: childData})
    }

    return(
        <div className="center">
            <h1 className="header center">Make your own flashcards</h1>
            <CardInput label="Enter card text: " placeholder="front side" parentCallback={getInputFront} inputSide="front"/>
            <CardInput label="Enter card text: " placeholder="back side" parentCallback={getInputBack} inputSide="back"/>
            <FlashcardContainer input={inputData}/>
        </div>
    )
}

export default App