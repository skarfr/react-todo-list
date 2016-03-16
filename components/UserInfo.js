import React, { Component } from 'react'

/**
 * This component is a single UserInfo
 */
class UserInfo extends Component {


  handleNewId() {
    //dispatch an action
    this.props.actions.createNewUserId();
  }

  handleNewIdIfOdd() {
    this.props.actions.createNewUserIdOdd();
  }

  handleNewIdAsync() {
    this.props.actions.createNewUserIdAsync();
  }

  render() {
    return (
      <div>
        <div>{this.props.user.username}</div>
        <div>{this.props.user.id}</div>
        <button onClick={this.handleNewId.bind(this)}>Update with a random ID</button>
        <button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if odd</button>
        <button onClick={this.handleNewIdAsync.bind(this)}>Update Async</button>
      </div>
    )
  }
}

export default UserInfo