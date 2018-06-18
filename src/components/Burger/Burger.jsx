import React from 'react'

import classes from './Burger.module.css'
import Ingredient from './Ingredient/Ingredient'
import PropTypes from 'prop-types'

const Burger = ({ ingredients }) => {
  let transformed = Object.keys(ingredients)
    .map(key =>
      [...Array(ingredients[key])].map((_, i) => (
        <Ingredient type={key} key={key + i} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), [])

  if (transformed.length === 0) {
    transformed = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {transformed}
      <Ingredient type="bread-bottom" />
    </div>
  )
}

Burger.propTypes = {
  ingredients: PropTypes.shape({
    salad: PropTypes.number.isRequired,
    bacon: PropTypes.number.isRequired,
    cheese: PropTypes.number.isRequired,
    meat: PropTypes.number.isRequired,
  }).isRequired,
}

export default Burger
