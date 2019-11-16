import React, {Component} from 'react';
import "./css/UserInput.css"

class UserInput extends Component {
    render() {
        return (
            <div>
                <input className="UserInput"
                       value={this.props.username}
                       onChange={(event) => {
                           this.props.change(event)
                       }}

                />
            </div>
        );
    }
}

export default UserInput;