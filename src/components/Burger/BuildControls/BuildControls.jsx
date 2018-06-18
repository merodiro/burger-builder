import React from 'react'
import PropTypes from 'prop-types'

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = props => {
  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
  ]
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        Order Now
      </button>
    </div>
  )
}

BuildControls.propTypes = {
  price: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  ingredientAdded: PropTypes.func,
  ingredientRemoved: PropTypes.func,
  ordered: PropTypes.func,
  disabled: PropTypes.object.isRequired,
}

export default BuildControls
