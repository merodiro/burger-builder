import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import classes from './Ingredient.css'

const Ingredient = ({ type }) => {
  let content = null

  if (type === 'bread-top') {
    content = (
      <Fragment>
        <div className={classes.seeds1}></div>
        <div className={classes.seeds2}></div>
      </Fragment>
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
    'bacon'
  ]).isRequired
}

export default Ingredient