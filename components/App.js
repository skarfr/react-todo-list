/**
 * This is the main/top component
 */
import React, { Component } from 'react'
import TodoInput from './TodoInput'   //child component
import TodoList from './TodoList'     //child component
import { connect } from 'react-redux' //connect is a function used to plug the component and the store. It returns what we call a "connectedComponent" aware of what happen in the store (new states creation)
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'

class App extends Component {

  /**
   * We send dispatch() to TodoInput so it can trigger the action addTodo
   * We send todos[] to TodoList so it can display the list of todos
   * @returns {XML}
   */
  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <UserInfo user={this.props.user} actions={this.props.actions}/>
        <TodoInput addTodo={this.props.actions.addTodo} />
        <TodoList actions={this.props.actions} todos={this.props.todos} />
      </div>
    )
  }
}

/**
 * This function is used by redux.connect
 * it automatically connects all states with our main component: App through its props
 * @param state
 * @returns {*}
 */
function mapStateToProps(state) {
  //return state.todos //if we do this, only todos[] will be sent. Since we already need dispatch(), we send the whole state
  return state
}

/**
 * Wraps all the actions with the dispatcher so we don't have to pass the dispatcher to children components
 * we just have to pass actions needed
 * @param dispatch
 * @returns {{actions: *}}
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

//export default App //so it can be imported in client.js
export default connect(mapStateToProps, mapDispatchToProps)(App)