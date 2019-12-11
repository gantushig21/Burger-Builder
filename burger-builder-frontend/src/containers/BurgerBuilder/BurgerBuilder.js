import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
    this.updatePurchaseState = this.updatePurchaseState.bind(this);
    this.togglePurchaseHandler = this.togglePurchaseHandler.bind(this);
  }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  addIngredientHandler(type) {
    const ingredients = {
      ...this.state.ingredients
    };
    ingredients[type]++;

    this.setState(prevState => {
      return {
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
        ingredients
      };
    });
    this.updatePurchaseState(ingredients);
  }

  removeIngredientHandler(type) {
    const ingredients = {
      ...this.state.ingredients
    };
    if (ingredients[type] > 0) {
      ingredients[type]--;

      this.setState(prevState => {
        return {
          totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
          ingredients
        };
      });
      this.updatePurchaseState(ingredients);
    }
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).reduce((sum, igKey) => {
      return sum + ingredients[igKey];
    }, 0);

    this.setState({
      purchaseable: sum > 0
    });
  }

  togglePurchaseHandler() {
    this.setState(prevState => {
      return {
        purchasing: !prevState.purchasing
      };
    });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.togglePurchaseHandler}
        >
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          ordered={this.togglePurchaseHandler}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
