import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import visibilityFilterReducer from './visibilityFilterReducer'

/**
 * 複数のReducerをまとめる
 * ReducerのキーがそのままStateにも適用される。
 * {
 *   todo: ...,
 *   visibiltyFilter: ...
 * }
 */
const todoApp = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export default todoApp