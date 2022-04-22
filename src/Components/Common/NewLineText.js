import React from "react"
import PropTypes from 'prop-types'
import { Constants } from "@aws-amplify/core";

export default class NewLineText extends React.Component {
    static propTypes = {
        value: PropTypes.string,
    }

    splitNextLineIntoArray = (multilinedText) => {
        return multilinedText.split('\n');
    }

    render() {
        const { value } = this.props;
        return (
            <div className="block">
            {
                this.splitNextLineIntoArray(value).map((paragraphContent, i) => {
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
