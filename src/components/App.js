import React, {useState} from "react"
import CardInput from "./CardInput/CardInput"
import FlashcardContainer from "./FlashcardContainer/FlashcardContainer";

const App = () => {
    const [inputData, setInputData] = useState("")
    // Harvest data from input
    const getInputData = (childData) => {
        setInputData(childData)
    }

    return(
        <div className="main">
            <h1 className="header">Make your own flashcards</h1>
            <CardInput label="Enter card text: " parentCallback={getInputData}/>
            {inputData}
            <FlashcardContainer />
        </div>
    )
}

export default App