/**
 * This file is the action creator
 * Every actions need at least a type and optional extra parameters
 */

let todoActions = {

  /**
   * Action Add Todo
   * @param text The Todo text
   * @returns {{type: string, text: *}}
   */
  addTodo: function(text) {
    return {
      type: "ADD_TODO",
      text: text
    }
  },

  completeTodo: function(id) {
    return {
      type: "COMPLETE_TODO",
      id: id
    }
  },

  deleteTodo: function(id) {
    return {
      type: "DELETE_TODO",
      id: id
    }
  }

}

export default todoActions