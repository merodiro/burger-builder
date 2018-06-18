import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Modal = ({ show, closed, children }) => {
  let modalClasses = [classes.Modal]
  show && modalClasses.push(classes.Opened)
  return (
    <Fragment>
      <Backdrop show={show} clicked={closed} />
      <div className={modalClasses.join(' ')}>{children}</div>
    </Fragment>
  )
}

Modal.propTypes = {
  closed: PropTypes.func,
  show: PropTypes.bool,
}

export default Modal
