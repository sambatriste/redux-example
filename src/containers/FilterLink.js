import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

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


/**
 * Container Component
 */
const FilterLink = connect(     // ReactコンポーネントとReduxのストアを結びつける.
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink