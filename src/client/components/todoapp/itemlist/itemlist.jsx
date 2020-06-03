import React from 'react';

import ToDoItem from './todoitem/todoitem'

export default class ItemList extends React.Component {
    render() {
        const itemList = this.props.itemList.map(item => {
            return <ToDoItem item={item} deleteItem={this.props.deleteItem} />;
        })

        return (
            <div>
                <h3>Item List</h3>
                <ul>{itemList}</ul>
            </div>
        );
    }
}