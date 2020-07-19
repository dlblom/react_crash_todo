import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        testDecoration: 'line-through'
      }
    } else {
      return {
      textDecoration: 'none'
    }
  }
}

  render () {
    return (
    <div style={this.getStyle()}>
      <p>{ this.props.todo.title }</p>
    </div>
    )
  };
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}



export default TodoItem;