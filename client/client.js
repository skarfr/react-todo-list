/**
 * This is basically the main() of our app
 */
import React from 'react'                   // we need the React library
import { render } from 'react-dom'          // we need the render function from the react-dom library
import App from '../components/App'         // we import our main component: components/App.js
import configureStore from '../redux/store' // the store contains all states of our application
import { Provider } from 'react-redux'      //the provider allow us to connect our main component (App) with the store. Then App pass states to it's children component, through props

//we initiate the default state with:
// A list of todos containing 1 empty todos
let initialState = { //let is similar to var
  todos: [{
    id: 0,
    completed: false,
    text:'Initial todo for demo'
  }],
  user:{
    username:"skar",
    id:1
  }
}

//we create the store
let store = configureStore(initialState)

/**
 * We call the render function.
 * We define our main component, the one which contains all the other ones (top of the pyramid)
 * Provider is the link between our main component (App) with the store
 */
render (
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')

)