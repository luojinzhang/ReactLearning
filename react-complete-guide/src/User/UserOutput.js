import React, {Component} from 'react';
import "./css/UserOutput.css"

class UserOutput extends Component {
    p1 = {
        color: "black"
    };

    render() {
        return (
            <div className="UserOutput">
                <p className="UserOutputP1" style={this.p1}>Welcome</p>
                <p className="UserOutputP2">{this.props.username}</p>
            </div>
        );
    }
}

export default UserOutput;