import React from 'react'
import PropTypes from 'prop-types'

import classes from './Button.module.css'

const Button = ({ clicked, type, children }) => (
  <button
    onClick={clicked}
    className={[classes.Button, classes[type]].join(' ')}
  >
    {children}
  </button>
)

Button.prototype = {
  clicked: PropTypes.func,
  type: PropTypes.oneOf(['Success', 'Danger']).isRequired,
}

export default Button
