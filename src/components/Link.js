import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active,         // FilterLinkのmapStateToPropsで設定されたもの
                children,       // childrenは<FilterLink>のchildrenを指す(All,Active,Completed)
                onClick }) => { // FilterLinkのmapDispatchToPropsで設定されたもの
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

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
