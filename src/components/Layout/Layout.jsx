import React, { Fragment, Component } from 'react'

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    })
  }

  drawerToggleClicked = () => {
    this.setState(prevState => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      }
    })
  }

  render() {
    let { children } = this.props
    return (
      <Fragment>
        <Toolbar clicked={this.drawerToggleClicked} />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{children}</main>
      </Fragment>
    )
  }
}

export default Layout
