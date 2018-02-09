import React, { Component, Fragment } from 'react'
import mapValues from 'lodash/mapValues'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
}

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    purchasing: false,
  }

  addIngredientHandled = type => {
    this.setState((oldState, props) => {
      return {
        ingredients: {
          ...oldState.ingredients,
          [type]: oldState.ingredients[type] + 1,
        },
      }
    })
  }

  removeIngredientHandled = type => {
    if (this.state.ingredients[type] <= 0) {
      return
    }
    this.setState((oldState, props) => ({
      ingredients: {
        ...oldState.ingredients,
        [type]: oldState.ingredients[type] - 1,
      },
    }))
  }

  purchaseHandeler = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandeler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandeler = () => {
    console.log('You Continue!')
  }

  render() {
    const { ingredients } = this.state
    const disabledInfo = mapValues(ingredients, amount => amount <= 0)

    const price = Object.entries(ingredients)
      .map(([key, amount]) => INGREDIENT_PRICES[key] * amount)
      .reduce((sum, el) => sum + el, 4)

    const purchasable =
      Object.values(ingredients).filter(amount => amount > 0).length > 0

    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          closed={this.purchaseCancelHandeler}
        >
          <OrderSummary
            ingredients={ingredients}
            purchaseContinue={this.purchaseContinueHandeler}
            purchaseCancel={this.purchaseCancelHandeler}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          price={price}
          disabled={disabledInfo}
          purchasable={purchasable}
          ordered={this.purchaseHandeler}
          ingredientAdded={this.addIngredientHandled}
          ingredientRemoved={this.removeIngredientHandled}
        />
      </Fragment>
    )
  }
}
