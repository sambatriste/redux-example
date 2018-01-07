import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Todo from './Todo'
import { toggleTodo } from '../actions'

const TodoListComponent = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        )
      })}
    </ul>
  )
}

TodoListComponent.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

/**
 * TODO一覧からフィルターされたTODOを取得する。
 * @param todos TODO一覧
 * @param filter フィルターの種類
 * @returns {*} フィルターされたTODO
 */
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

/**
 * 与えられたステートから、コンポーネントにpropsとして渡す値を作成する。
 * ステートのフィルタをTODO一覧に適用し、TODOをフィルタする。
 *
 * @param state ステート
 * @param ownProps 自コンポーネントのプロパティ
 * @returns {{todos: *}} フィルターされたTODO一覧
 */
const mapStateToProps = (state, ownProps) => {
  // フィルターされたTODO一覧
  const visibleTodos = getVisibleTodos(state.todos, ownProps.filter);
  return {
    todos: visibleTodos
  }
}

/**
 * * Reduxのdispatchとコンポーネント自身のpropsから、新しいpropsを作成する。
 * TODOがクリックされたときのコールバック関数(onTodoClick)を持つpropsを作成する。
 *
 * @param dispatch Reduxのdispatch
 * @returns {{onTodoClick: function(*=)}} TODOがクリックされたときのコールバック
 */
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      const action = toggleTodo(id);  // Action Creatorを呼び出して、Actionを作成する
      dispatch(action)                // 作成したActionをdispatchする->Reducerが呼び出される
    }
  }
}

// ReactコンポーネントとReduxのストアを結びつける.
const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoListComponent)
export default TodoList
