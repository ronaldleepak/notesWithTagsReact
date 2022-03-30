import React from "react"
import { LoginPanel } from "../Components/Common"

class SigninPage extends React.Component { 
    render() {
        return (
            <div className="pt-5">
                <div className="block has-text-centered">
                    <h1 className="title is-1">
                        Welcome to NotesWithTags!
                    </h1>
                </div>
                <div>
                    <LoginPanel/>
                </div>
            </div>
        );
    };
}
export default SigninPage
