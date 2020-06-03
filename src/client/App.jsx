import React from 'react';
import { hot } from 'react-hot-loader';

import ToDoApp from './components/todoapp/todoapp';

class App extends React.Component {
  render() {
    return (
      <div>
        <ToDoApp />
      </div>
    );
  }
}

export default hot(module)(App);