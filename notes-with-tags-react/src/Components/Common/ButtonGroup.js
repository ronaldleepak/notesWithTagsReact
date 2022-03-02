import React from "react"

export default class ButtonGroup extends React.Component {
    render() {
        var { buttons } = this.props;
        return (
            <div className="block buttons">
            {
                buttons.map(button => {
                    var className = "button is-light " + button.bulmaClassName;
                    return (
                        <button className={className} onClick={button.action}>
                            {button.label}
                        </button>
                    )
                })
            }
            </div>
        );
    };
}
