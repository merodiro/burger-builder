import React, { Component, Fragment } from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

export default class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredientHandled = (type) => {
    this.setState((oldState, props) => {
      return {
        totalPrice: oldState.totalPrice + INGREDIENT_PRICES[type],
        ingredients: {
          ...oldState.ingredients,
          [type]: oldState.ingredients[type] + 1
        }
      }
    })
  }

  removeIngredientHandled = (type) => {
    if (this.state.ingredients[type] <= 0) {
      return
    }
    this.setState((oldState, props) => ({
      totalPrice: oldState.totalPrice - INGREDIENT_PRICES[type],
      ingredients: {
        ...oldState.ingredients,
        [type]: oldState.ingredients[type] - 1
      }
    }))
  }


  render() {
    let { ingredients } = this.state
    const disabledInfo = {}
    Object.keys(ingredients).forEach(key => {
      disabledInfo[key] = ingredients[key] <= 0
    });
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          disabled={disabledInfo}
          ingredientAdded={this.addIngredientHandled}
          ingredientRemoved={this.removeIngredientHandled}
        />
      </Fragment>
    )
  }
}
