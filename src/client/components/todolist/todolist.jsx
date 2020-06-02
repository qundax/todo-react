import React from 'react';

export default class ToDoList extends React.Component {
    constructor() {
        super();

        this.state = {
            list: []
        }
    }

    changeHandler(event) {
        this.setState({
            word: event.target.value
        })
    }

    clickHandler() {
        console.log("hello");
        this.setState({
            list: [this.state.word, ...this.state.list],
            word: ""
        })
    }

    render() {
        const listItems = this.state.list.map(item => {
            return (
                <li>{item}</li>
                );
        });

        return (
            <div>
                <ul>{listItems}</ul>
                <input onChange={event => {this.changeHandler(event);}} value={this.state.word} />
                <br/><br/>
                <button onClick={() => {this.clickHandler();}}>Add Item</button>
            </div>
        );
    }
}