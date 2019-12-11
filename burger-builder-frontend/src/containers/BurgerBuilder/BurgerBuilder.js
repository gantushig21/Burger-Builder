import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";

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
  }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
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
    }
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
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
