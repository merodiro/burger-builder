import React from 'react'
import PropTypes from 'prop-types'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = ({ clicked }) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={clicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

Toolbar.propTypes = {
  clicked: PropTypes.func,
}

export default Toolbar
