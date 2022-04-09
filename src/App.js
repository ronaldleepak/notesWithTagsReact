import React from "react"
import { HomePage, SigninPage } from "./Pages";
import { NavBar } from "./Components/Common"
class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                
                <HomePage/>
                <SigninPage/>
            </div>
        );
    }
}

export default App
