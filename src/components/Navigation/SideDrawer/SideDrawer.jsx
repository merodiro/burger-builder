import React, { Fragment } from 'react'

import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = () => {
  return (
    <Fragment>
      <Backdrop />
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  )
}

export default SideDrawer
