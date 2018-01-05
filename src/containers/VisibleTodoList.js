import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

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
 * @param state ステート
 * @returns {{todos: *}} フィルターされたTODO一覧
 */
const mapStateToProps = state => {
  // フィルターされたTODO一覧
  const visibleTodos = getVisibleTodos(state.todos, state.visibilityFilter);
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

/**
 * Container Component
 */
const VisibleTodoList = connect(   // ReactコンポーネントとReduxのストアを結びつける.
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
