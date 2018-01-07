import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({ filter, children }) => {
  return (
    <NavLink
      to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}>
      {children}
    </NavLink>
  )
}

export default Link

