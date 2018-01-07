import React from 'react'
import Footer from './Footer'
import NewTodo from './NewTodo'
import TodoList from './TodoList'

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