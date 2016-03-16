import React, { Component } from 'react'
import TodoItem from './TodoItem'     //child component
/**
 * This component is a list of Todos
 */
class TodoList extends Component {

  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            return <TodoItem actions={this.props.actions} key={todo.id} todo={todo} />
          })
        }
      </ul>
    )
  }
}

export default TodoList