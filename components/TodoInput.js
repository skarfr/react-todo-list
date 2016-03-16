import React, { Component } from 'react'

/**
 * This component is an inputText and a button
 */
class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    //console.log(event.target.value) //we notice that while typing in the input, event.target.value change (although nothing change on screen)

    /*
     * databinding: using the function setState(), we set that this.inputText variable should always be equal to event.target.value
     * Thanks to that, it is now possible to key-in in the input text
     */
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault(); //so the page doest refresh onSubmit
    //console.log('submit clicked')
    this.props.addTodo(this.state.inputText)
  }

  render() {

    /**
     * value={this.state.inputText}               : databinding: The inputValue will always be equal to the component.state.inputText content
     * onChange={this.handleChange.bind(this)}    : databinding: OnChange, we call the function handleChange and we pass it, itself (the input) as a parameter (through bind(this))
     */
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"
            placeholder="Type in you todo"
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
          />
          <input type="submit" text="submit" />
        </form>
      </div>
    )
  }
}

export default TodoInput