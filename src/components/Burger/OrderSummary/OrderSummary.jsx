import React from 'react'
import PropTypes from 'prop-types'

import classes from './OrderSummary.module.css'
import Button from '../../UI/Button/Button'

const OrderSummary = ({
  ingredients,
  price,
  purchaseContinue,
  purchaseCancel,
}) => (
  <>
    <h3>Your Order</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
      {Object.entries(ingredients).map(([key, amount]) => (
        <li key={key}>
          <span className={classes.IngredientKey}>{key}:</span> {amount}
        </li>
      ))}
    </ul>
    <p>
      <strong>Total Price: {price.toFixed(2)}</strong>
    </p>
    <p>Continue to Checkout?</p>
    <Button type="Danger" clicked={purchaseCancel}>
      Cancel
    </Button>
    <Button type="Success" clicked={purchaseContinue}>
      Continue
    </Button>
  </>
)

OrderSummary.prototype = {
  ingredients: PropTypes.object.isRequired,
  purchaseContinue: PropTypes.func.isRequired,
  purchaseCancel: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
}

export default OrderSummary
