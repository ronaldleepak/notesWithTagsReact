import React from "react"

export default class HomePage extends React.Component {
    state = {
        message: "Welcome to NotesWithTags!",
        notes: [],
    };

    render() {
        return (
            <div>
                <div class="block has-text-centered">
                    <h1 class="title is-1">
                        {this.state.message}
                    </h1>
                </div>
                <div>
                    
                </div>
            </div>
        );
    };
}
