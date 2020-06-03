import React from 'react';

import Form from './form/form';
import ItemList from './itemlist/itemlist';
import DeletedItemList from './deleteditemlist/deleteditemlist'

export default class ToDoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            itemList: [],
            deletedList: []
        };
    }

    addItem(item) {
        this.setState({itemList: [item, ...this.state.itemList]});
    }

    deleteItem(itemId) {
        const items = this.state.itemList.filter(item => item.id !== itemId);
        const deletedItem = this.state.itemList.find(item => item.id === itemId);
        this.setState({
            itemList: items,
            deletedList: [deletedItem, ...this.state.deletedList]
        });
    }

    render() {
        return (
            <div>
                <Form addItem={item => {this.addItem(item)}} itemList={this.state.itemList} />
                <ItemList itemList={this.state.itemList} deleteItem={itemId => {this.deleteItem(itemId)}} />
                <DeletedItemList deletedList={this.state.deletedList} />
            </div>
        );
    }
}