import React from 'react';
import { hot } from 'react-hot-loader';

import ToDoList from './components/todolist/todolist';

class App extends React.Component {
  render() {
    return (
      <div>
        Welcome.
        <ToDoList />
      </div>
    );
  }
}

export default hot(module)(App);