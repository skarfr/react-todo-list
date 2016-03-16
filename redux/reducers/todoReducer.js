
function getId(todos) {
  // the reduce function runs for each values in the array todos, the following function with parameters: the previous return of the function (or -1) and the current value
  return todos.reduce((maxId /*previous value*/, todo /*current value*/) => {
      return Math.max(todo.id, maxId) // we basically get the higher existing todos.id
    }, -1) +1;                        // we add +1 to get the next one
}

/**
 * The todoReducer contains the logic of each actions
 * it is possible to create multiple reducers function (1 for todos, 1 for other other... with CombineReducers
 * and all reducers will be called 1 after the other. That's why by default, we must return the existing state (so the next reducer can try to handle it)
 * @param state
 * @param action
 * @returns {*}
 */
let todoReducer =  function(todos = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [{
        text: action.text,
        completed: false,
        id: getId(todos)
      },
      ...todos] // array of todos. We are adding 1 new todos to the list of existing todos (...state.todos)

    case 'COMPLETE_TODO':
      return todos.map((todo) => {
        return todo.id === action.id ?
          Object.assign({}, todo, {completed: !todo.completed}) : todo //if true, this will return a new todos completed. We don't want to update the existing one, we always want to add a new one. If no, we just return the todos

      })

    case 'DELETE_TODO':
      return todos.filter((todo) => {
            return todo.id !== action.id //if equal, then delete
          })

    default:
      return todos;
  }
}

export default todoReducer