import React from "react"

export default class NewLineText extends React.Component {

    splitNextLine = (multilinedText) => {
        return multilinedText.split('\n');
    }

    render() {
        var { text } = this.props;
        return (
            <div class="block">
            {
                this.splitNextLine(text).map(paragraphContent => {
                    return (
                        <p>{paragraphContent}</p>
                    )
                })
            }
            </div>
        );
    };
}
