import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import classes from './OrderSummary.module.css'
import Button from '../../UI/Button/Button'

const OrderSummary = ({ ingredients, purchaseContinue, purchaseCancel }) => {
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {Object.entries(ingredients).map(([key, amount]) => (
          <li key={key}>
            <span className={classes.IngredientKey}>{key}:</span> {amount}
          </li>
        ))}
      </ul>
      <p>Continue to Checkout?</p>
      <Button type="Danger" clicked={purchaseCancel}>Cancel</Button>
      <Button type="Success" clicked={purchaseContinue}>Continue</Button>
    </Fragment>
  )
}

OrderSummary.prototype = {
  ingredients: PropTypes.object.isRequired,
  purchaseContinue: PropTypes.func.isRequired,
  purchaseCancel: PropTypes.func.isRequired
}

export default OrderSummary
