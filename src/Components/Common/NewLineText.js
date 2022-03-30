import React from "react"

export default class NewLineText extends React.Component {

    splitNextLine = (multilinedText) => {
        return multilinedText.split('\n');
    }

    render() {
        var { text } = this.props;
        return (
            <div className="block">
            {
                this.splitNextLine(text).map((paragraphContent, i) => {
                    const key = "paragraph_" + i;
                    return (
                        <p key={key}>
                            {paragraphContent}
                        </p>
                    )
                })
            }
            </div>
        );
    };
}
