import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'
import Root from './components/Root'

// Reduxのストアを作成する(todoAppはひとつに束ねられたReducer)。
let store = createStore(todoApp)

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)

