import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

export class Modal extends Component {
  static propTypes = {
    closed: PropTypes.func,
    show: PropTypes.bool,
  }

  shouldComponentUpdate = nextProps => {
    return nextProps.show !== this.props.show
  }

  render() {
    let { show, closed, children } = this.props
    let modalClasses = [classes.Modal]
    show && modalClasses.push(classes.Opened)
    return (
      <>
        <Backdrop show={show} clicked={closed} />
        <div className={modalClasses.join(' ')}>{children}</div>
      </>
    )
  }
}

export default Modal
