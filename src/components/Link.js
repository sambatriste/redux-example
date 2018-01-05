import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setVisibilityFilter } from '../actions'

const LinkComponent = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href=""
       onClick={e => {
         e.preventDefault()
         onClick()     // 渡されたコールバックを呼び出す->新しいActionがReducerにdispatchされる
       }}
    >
      {children}
    </a>
  )
}

LinkComponent.propTypes = {
  active: PropTypes.bool.isRequired,    // FilterLinkのmapStateToPropsで設定されたもの
  children: PropTypes.node.isRequired,  // childrenは<FilterLink>のchildrenを指す(All,Active,Completed)
  onClick: PropTypes.func.isRequired    // FilterLinkのmapDispatchToPropsで設定されたもの
}

/**
 * 与えられたステートから、コンポーネントにpropsとして渡す値を作成する。
 *
 * @param state ステート
 * @param ownProps コンポーネント自身のプロパティ
 * @returns {{active: boolean}} フィルタが有効になっているかどうか
 */
const mapStateToProps = (state, ownProps) => {
  return {
    // ownProps.filterは../components/Footer.jsで記載されている
    // <FilterLink filter="..." />を指している("SHOW_ALL", "SHOW_ACTIVE", "SHOW_COMPLETED")
    // 自身のフィルタ名とステートのフィルタ名が一致している場合、
    // このコンポーネントのフィルタが有効になっている
    active: ownProps.filter === state.visibilityFilter
  }
}

/**
 * Reduxのdispatchとコンポーネント自身のpropsから、新しいpropsを作成する。
 * フィルターがクリックされたときのコールバック関数(onClick)を持つpropsを作成する。
 * @param dispatch
 * @param ownProps
 * @returns {{onClick: function()}}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      // クリック時、自身のフィルタ名("SHOW_ALL", "SHOW_ACTIVE", "SHOW_COMPLETED")を
      // 使用して、新しいフィルタ設定Actionを作成し、dispacthする
      const action = setVisibilityFilter(ownProps.filter);  // Action Creatorを呼び出して、Actionを作成する
      dispatch(action)                                      // 作成したActionをdispatchする->Reducerが呼び出される
    }
  }
}

// ReactコンポーネントとReduxのストアを結びつける.
/** Container Component */
const Link = connect(mapStateToProps, mapDispatchToProps)(LinkComponent)

export default Link

