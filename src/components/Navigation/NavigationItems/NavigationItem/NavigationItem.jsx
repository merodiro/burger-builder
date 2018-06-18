import React from 'react'

import classes from './NavigationItem.module.css'

const NavigationItem = ({ active, link, children }) => (
  <li className={classes.NavigationItem}>
    <a href={link} className={active && classes.active}>
      {children}
    </a>
  </li>
)

export default NavigationItem
