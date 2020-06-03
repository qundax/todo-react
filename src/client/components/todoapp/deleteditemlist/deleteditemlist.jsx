import React from 'react';

export default class DeletedItemList extends React.Component {
    render() {
        const deletedList = this.props.deletedList.map(item => {
            return (
                <li>{item.value}</li>
                )
        })
        return (
            <div>
                <h3>Deleted Item List</h3>
                <ul>{deletedList}</ul>
            </div>
        );
    }
}