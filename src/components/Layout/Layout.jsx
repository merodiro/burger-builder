import React, { Fragment } from 'react'

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = ({ children }) => (
  <Fragment>
    <Toolbar />
    <main className={classes.Content}>{children}</main>
  </Fragment>
)

export default Layout
