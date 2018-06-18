import React, { Fragment } from 'react'

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = ({ children }) => (
  <Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{children}</main>
  </Fragment>
)

export default Layout
