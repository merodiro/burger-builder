import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => (
  <nav className={classes.NavigationItems}>
    <ul>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  </nav>
)

export default NavigationItems
