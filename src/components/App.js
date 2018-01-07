import React from 'react'
import Footer from './Footer'
import NewTodo from './NewTodo'
import TodoList from './TodoList'

const App = ({ match: { params } }) => { // props.match.params
  return (
    <div>
      <NewTodo />
      <TodoList filter={params.filter || 'SHOW_ALL'}/>
      <Footer />
    </div>
  )
}

export default App