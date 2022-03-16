import React from "react"
import HomePage from "./Pages/Home";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
export default class App extends React.Component {
    render() {
        return (
                <Authenticator>
                    {({ signOut, user }) => (
                        <HomePage user={user}/>
                    )}
                </Authenticator>
        );
    }
}
