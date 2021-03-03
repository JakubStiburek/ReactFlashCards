import React from "react"
import Flashcard from "./Flashcard/Flashcard"
import RegisterCard from "./RegisterCard/RegisterCard"

const App = () => {
    const memory = []

    return(
        <div className="main">
            <RegisterCard memory={memory}/>
            <Flashcard text={["ahoj", "hi"]}/>
        </div>
    )
}

export default App