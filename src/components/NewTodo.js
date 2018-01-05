import React from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { addTodo } from "../actions";

/**
 * 新しいTODOを入力するPresentation Component.
 * @param onClick ボタンクリック時のコールバック
 * @returns {*} 新しいTODO入力
 * @constructor
 */
const NewTodoComponent = ({ onClick }) => {
  let input
  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault()
        if (!input.value.trim()) {
          return   // 入力が空ならば何もしない
        }
        onClick(input.value)  // propsで渡されたコールバック関数onClickを呼び出す.
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

NewTodoComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
}


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

// ReactコンポーネントとReduxのストアを結びつける.
const NewTodo = connect(null, mapDispatchToProps)(NewTodoComponent)

export default NewTodo
