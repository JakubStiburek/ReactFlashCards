import React from "react"
import Flashcard from "./Flashcard/Flashcard"
import RegisterCard from "./RegisterCard/RegisterCard"

const App = () => {
    return(
        <div>
            <RegisterCard />
            <Flashcard text={["ahoj", "hi"]}/>
        </div>
    )
}

export default App