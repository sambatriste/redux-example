import React from 'react'
import Footer from './Footer'
import NewTodo from '../components/NewTodo'
import TodoList from '../components/TodoList'

const App = () => {
  return (
    <div>
      <NewTodo />
      <TodoList />
      <Footer />
    </div>
  )
}

export default App