import React from 'react'
import PropTypes from "prop-types";

/**
 * 新しいTODOを入力するPresentation Component.
 * @param onClick ボタンクリック時のコールバック
 * @returns {*} 新しいTODO入力
 * @constructor
 */
const NewTodo = ({ onClick }) => {
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

NewTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default NewTodo