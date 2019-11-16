import React, {Component} from 'react';

class Validation extends Component {
    validateText(textLength) {
        let alert = "";
        if (textLength < 5) {
            // console.log("too short");
            alert = "Text too short";
        } else if (textLength > 15) {
            // console.log("too long");
            alert = "Text too long";
        }

        return (
            <div><p>{alert}</p></div>
        );
    }

    render() {
        return (
            <div>
                {
                    this.validateText(this.props.textLength)
                }
            </div>
        );
    }
}

export default Validation;