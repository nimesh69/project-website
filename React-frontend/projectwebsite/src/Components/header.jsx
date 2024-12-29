

import React from 'react'
import { NavLink } from 'react-router'

export function Headers(props){
  return (
    <NavLink to={props.link}>
      <p className ="nav-button">{props.value}</p>

    </NavLink>
  )
}