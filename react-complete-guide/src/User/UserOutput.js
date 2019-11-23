import React, {Component} from 'react';
import "./css/UserOutput.css"
import Radium from "radium";

class UserOutput extends Component {
    p1 = {
        color: "black"
    };

    render() {
        const style = {
            ':hover': {
                backgroundColor: 'red',
                color: 'yellow'
            },
            '@media (min-width: 300px)': {
                backgroundColor: 'blue'
            }
        };
        return (
            <div className="UserOutput" style={style}>
                <p className="UserOutputP1" style={this.p1}>Welcome</p>
                <p className="UserOutputP2">{this.props.username}</p>
            </div>
        );
    }
}

export default Radium(UserOutput);