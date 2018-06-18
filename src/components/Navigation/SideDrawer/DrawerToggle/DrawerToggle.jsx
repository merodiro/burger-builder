import React from 'react'

import classes from './DrawerToggle.module.css'

const drawerToggle = ({ clicked }) => {
  return (
    <div onClick={clicked} className={classes.DrawerToggle}>
      <div />
      <div />
      <div />
    </div>
  )
}

export default drawerToggle
