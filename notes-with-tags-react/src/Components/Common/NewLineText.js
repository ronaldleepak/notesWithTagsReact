import React from "react"
import { uid } from '../../Util/Util'

export default class NewLineText extends React.Component {

    splitNextLine = (multilinedText) => {
        return multilinedText.split('\n');
    }

    render() {
        var { text } = this.props;
        return (
            <div className="block">
            {
                this.splitNextLine(text).map(paragraphContent => {
                    const key = "paragraph_" + uid();
                    return (
                        <p key={key}>{paragraphContent}</p>
                    )
                })
            }
            </div>
        );
    };
}
