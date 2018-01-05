import { connect } from 'react-redux'
import { addTodo } from '../actions'
import NewTodo from '../components/NewTodo'


/**
 * Reduxのdispatchとコンポーネント自身のpropsから、新しいpropsを作成する。
 * @param dispatch Reduxのdispatch
 * @param ownProps 使用しない
 * @returns {{onClick: function(*=)}}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (text) => {
      const action = addTodo(text);  // Action Creatorを呼び出して、Actionを作成する
      dispatch(action)               // 作成したActionをdispatchする->Reducerが呼び出される
    }
  }
}
const AddTodo = connect(     // ReactコンポーネントとReduxのストアを結びつける.
  null,
  mapDispatchToProps
)(NewTodo)

export default AddTodo