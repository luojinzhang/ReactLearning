import React, {Component} from 'react';
import './App.css';
import Validation from "./Validation/Validation";
import CharComponent from "./Char/CharComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    onChangeHandler(event) {
        const state = {...this.state};
        state.text = event.target.value;
        this.setState(state);
    }

    renderCharComponent() {
        return this.state.text;
    }

    onClickCharHandler(index) {
        console.log(index);
        let text = this.state.text;
        const newText = text.substring(0, index) + text.substring(index + 1, text.length);
        let state = {...this.state};
        state.text = newText;
        this.setState(state);
    }

    render() {
        return (
            <div className="App">
                <input value={this.state.text} onChange={(event) => {
                    this.onChangeHandler(event)
                }}/>
                <p>{this.state.text.length}</p>
                <Validation textLength={this.state.text.length}/>
                <CharComponent newChar={this.renderCharComponent()}
                               clickChar={this.onClickCharHandler.bind(this)}/>
            </div>
        )
    }


}

export default App;
