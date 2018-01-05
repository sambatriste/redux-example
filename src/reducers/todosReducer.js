/**
 * TODOのReducer.
 *
 * @param state
 * @param action
 * @returns {*}
 */
const todosReducer = (state = [], action) => {  // Reducerはstateとactionを引数に取る
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) ?
          { ...todo, completed: !todo.completed } :
          todo
      )
    default:
      return state
  }
}

export default todosReducer