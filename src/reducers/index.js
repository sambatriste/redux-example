import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/**
 * 複数のReducerをまとめる
 * ReducerのキーがそのままStateにも適用される。
 * {
 *   todo: ...,
 *   visibiltyFilter: ...
 * }
 */
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp