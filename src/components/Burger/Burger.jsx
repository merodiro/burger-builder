import React from 'react'

import classes from './Burger.css'
import Ingredient from './Ingredient/Ingredient'

export default ({ ingredients }) => {
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
