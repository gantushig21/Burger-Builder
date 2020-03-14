import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";
import Spinner from '../../components/UI/Spinner';
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.updatePurchaseState = this.updatePurchaseState.bind(this);
    this.togglePurchaseHandler = this.togglePurchaseHandler.bind(this);
    this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
  }

  state = { 
    purchasing: false
  };

  componentDidMount() {
    this.props.getIngredients();
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).reduce((sum, igKey) => {
      return sum + ingredients[igKey];
    }, 0);

    return sum > 0;
  }

  togglePurchaseHandler() {
    this.setState(prevState => {
      return {
        purchasing: !prevState.purchasing
      };
    });
  }

  purchaseContinueHandler() {
    this.props.history.push('/checkout');    
  }

  render() {
    const disabledInfo = {
      ...this.props.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.props.error ? <p>Ingredients can't be loader</p> : <Spinner />;

    if (this.props.ingredients) {
      burger = (
      <Aux>
        <Burger ingredients={this.props.ingredients} />
        <BuildControls
          ingredientAdded={ this.props.onIngredientAdded}
          ingredientRemoved={this.props.onIngredientRemoved}
          disabled={disabledInfo}
          purchaseable={this.updatePurchaseState(this.props.ingredients)}
          ordered={this.togglePurchaseHandler}
          price={this.props.price}
        />
      </Aux>);

      orderSummary = <OrderSummary 
        ingredients={this.props.ingredients} 
        price={this.props.price}
        purchaseCanceled={this.togglePurchaseHandler}
        purchaseContinued={this.purchaseContinueHandler}
      />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.togglePurchaseHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default BurgerBuilder;
