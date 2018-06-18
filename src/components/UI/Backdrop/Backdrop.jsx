import React from 'react'
import PropTypes from 'prop-types'

import classes from './Backdrop.module.css'

const Backdrop = ({ show, clicked }) =>
  show ? <div className={classes.Backdrop} onClick={clicked} /> : null

Backdrop.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool,
}

export default Backdrop
