import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers' //by default, it will take the index.js
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// we add middleware to log
/**
 * This function is used to call middleware before the usual createStore()
 * logger(): will log in the console the previous and the next
 * thunk check if an action is a function or an object. if it's a function, it will pass it to the dispatch & run through that function
 */
let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)


/**
 * The store contains all current and previous states. It's job is to store/save all states
 * by default, this function should just createStore()
 * but by using the custom function finalCreateStore(), we can add middlewares to the store
 * @param initialState
 * @returns {*}
 */
export default function configureStore(initialState = { todos: [], user: {} }) {
  return finalCreateStore(rootReducer, initialState)
}