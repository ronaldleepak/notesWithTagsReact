import React from "react"

const NEW_NOTE = 'NEW_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'
const SORT_NOTES = 'SORT_NOTES'
const FILTER_NOTES = 'FILTER_NOTES'

export default class NoteList extends React.Component {
    state = {
        message: "Welcome to NotesWithTags!",
        notes: [],
    };

    render() {
        return (
            <div className="columns is-centered is-mobile">
                <div className="column is-9">
                    <div className="block buttons">
                        <button className="button is-light">New Note</button>
                    </div>
                    <div className="list">
                    {/* {% for note in notes %}
                        {% set key = "note" + loop.index0 %}
                        <div key="{{key}}" class="box is-light">
                            {% mount '../noteCard' with { note: note, onNoteDelete: onNoteDelete } %}
                        </div>
                    {% endfor %} */}
                    </div>
                </div>
            </div>
        );
    };
}
