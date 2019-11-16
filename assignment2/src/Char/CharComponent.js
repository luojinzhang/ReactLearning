import React, {Component} from 'react';
import "./CharComponent.css";

class CharComponent extends Component {
    constructor(props) {
        super(props);
        this.listChars = [];
    }

    checkExistInList(text) {
        this.listChars = [...text];
    }

    showList() {
        const list = [...this.listChars];

        return list.map((char, index) => {
            return (
                <div className="CharComponent" key={index} onClick={this.props.clickChar.bind(this, index)}>
                    {char}
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                {this.checkExistInList(this.props.newChar)}
                {this.showList()}
            </div>
        );
    }
}

export default CharComponent;