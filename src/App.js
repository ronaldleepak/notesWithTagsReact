import React from "react"
import HomePage from "./Pages/Home";
import { NavBar } from "./Components/Common"
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
export default class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Authenticator>
                    {({ signOut, user }) => (
                        <HomePage/>
                    )}
                </Authenticator>
            </div>
        );
    }
}
