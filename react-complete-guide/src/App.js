import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './User/UserInput'
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Charles"
        }
    }

    changeUsernameHandler(events) {
        this.setState(
            {
                username: events.target.value
            }
        )
    }

    render() {
        return (
            <div className="App">
                <UserInput username={this.state.username}
                           change={this.changeUsernameHandler.bind(this)}/>
                <UserOutput username={this.state.username}/>
            </div>
        );
    }
}

export default App;
