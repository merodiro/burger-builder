import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = ({ show, clicked }) =>
  show ? <div className={classes.Backdrop} onClick={clicked} /> : null

export default Backdrop
