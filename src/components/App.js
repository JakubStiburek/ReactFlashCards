import React, {useState} from "react"
import CardInput from "./CardInput/CardInput"
import FlashcardContainer from "./FlashcardContainer/FlashcardContainer";

const App = () => {
    const [inputData, setInputData] = useState({front: "", back: ""})
    // Harvest data from input
    const getInputFront = (childData) => {
        setInputData({front: childData})
    }
    const getInputBack = (childData) => {
        setInputData({back: childData})
    }

    console.log(inputData)

    return(
        <div className="main">
            <h1 className="header">Make your own flashcards</h1>
            <CardInput label="Enter card text: " placeholder="front side" parentCallback={getInputFront}/>
            <CardInput label="Enter card text: " placeholder="back side" parentCallback={getInputBack}/>
            <FlashcardContainer input={inputData}/>
        </div>
    )
}

export default App