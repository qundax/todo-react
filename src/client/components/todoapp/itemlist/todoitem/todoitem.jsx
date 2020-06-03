import React from 'react';

export default class ToDoItem extends React.Component {
    clickHandler(event) {
        this.props.deleteItem(this.props.item.id);
    }

    render() {
        return (
            <div>
                <li>
                    {this.props.item.value}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={event => {this.clickHandler(event)}}>Delete</button>
                </li>
            </div>
        );
    }
}