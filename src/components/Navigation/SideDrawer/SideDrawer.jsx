import React from 'react'

import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = ({ closed, open }) => {
  let attatchedClassed = [classes.SideDrawer, classes.Close]
  if (open) {
    attatchedClassed = [classes.SideDrawer, classes.Open]
  }
  return (
    <>
      <Backdrop clicked={closed} show={open} />
      <div className={attatchedClassed.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}

export default SideDrawer
