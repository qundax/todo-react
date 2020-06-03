import React from 'react';

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    changeHandler(event) {
        this.setState({
            item: event.target.value
        })
    }

    clickHandler(event) {
        this.props.addItem({
            id: this.props.itemList.length + 1,
            value: this.state.item
        })
        this.state.item = ""
    }

    render() {
        return (
            <div>
                <input onChange={event => {this.changeHandler(event)}} value={this.state.item} />
                <br/><br/>
                <button onClick={event => {this.clickHandler(event)}}>Add Item</button>
            </div>
        );
    }
}