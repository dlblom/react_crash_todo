import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render () {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;

// we have to provide the props/pass them down from todos componenet to to doitem in line 7