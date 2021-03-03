import React from "react"
import CardInput from "./CardInput/CardInput"
import FlashcardContainer from "./FlashcardContainer/FlashcardContainer";

const App = () => {
    const memory = []

    return(
        <div className="main">
            <CardInput memory={memory} label="Front"/>
            <CardInput memory={memory} label="Back"/>
            <FlashcardContainer />
        </div>
    )
}

export default App