import React, {Component} from 'react';
import classes from './App.css';
import './User/UserInput'
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";
import Radium, {StyleRoot} from "radium";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Charles",
            clicked: false,
        }
    }

    changeUsernameHandler(events) {
        this.setState(
            {
                username: events.target.value,

            }
        )
    }

    click(events) {
        this.setState(
            {
                clicked: !this.state.clicked
            }
        )
    }

    render() {
        const assignedClasses = [];
        assignedClasses.push(classes.red);

        if (this.state.clicked) {
            assignedClasses.push(classes.bold);
        }
        return (
            <StyleRoot>
                <div className={classes.App}>
                    <UserInput username={this.state.username}
                               change={this.changeUsernameHandler.bind(this)}/>
                    <UserOutput username={this.state.username}/>
                    <button className={classes.Button} onClick={this.click.bind(this)}>
                        Click
                    </button>
                    <br/>
                    <label className={assignedClasses.join(' ')}>This is a Normal Text</label>
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
