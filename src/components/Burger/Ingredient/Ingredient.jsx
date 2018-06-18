import React from 'react'
import PropTypes from 'prop-types'

import classes from './Ingredient.module.css'

const Ingredient = ({ type }) => {
  let content = null

  if (type === 'bread-top') {
    content = (
      <>
        <div className={classes.seeds1} />
        <div className={classes.seeds2} />
      </>
    )
  }
  return <div className={classes[type]}>{content}</div>
}

Ingredient.propTypes = {
  type: PropTypes.oneOf([
    'bread-bottom',
    'bread-top',
    'meat',
    'cheese',
    'salad',
    'bacon',
  ]).isRequired,
}

export default Ingredient
