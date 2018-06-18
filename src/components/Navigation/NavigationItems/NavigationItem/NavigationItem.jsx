import React from 'react'
import PropTypes from 'prop-types'

import classes from './NavigationItem.module.css'

const NavigationItem = ({ active, link, children }) => (
  <li className={classes.NavigationItem}>
    <a href={link} className={active && classes.active}>
      {children}
    </a>
  </li>
)

NavigationItem.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string.isRequired,
}

export default NavigationItem
