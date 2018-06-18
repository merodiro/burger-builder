import React from 'react'
import PropTypes from 'prop-types'

import classes from './BuildControl.module.css'

const BuildControl = ({ label, added, removed, disabled }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} onClick={removed} disabled={disabled}>
        Less
      </button>
      <button className={classes.More} onClick={added}>
        More
      </button>
    </div>
  )
}

BuildControl.propTypes = {
  label: PropTypes.oneOf(['Salad', 'Bacon', 'Cheese', 'Meat']).isRequired,
  added: PropTypes.func,
  removed: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
}

export default BuildControl
