import React, { Fragment } from 'react'

import classes from './Layout.css'

const Layout = ({ children }) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {children}
    </main>
  </Fragment>
)

export default Layout