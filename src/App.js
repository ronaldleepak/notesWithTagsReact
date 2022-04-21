import React from "react"
import { HomePage, SignInPage } from "./Pages";
import { NavBar } from "./Components/Common"
class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                
                <HomePage/>
                
                <SignInPage/>
            </div>
        );
    }
}

export default App
