import React, { useState, useEffect } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";
import Spinner from '../../components/UI/Spinner';

const BurgerBuilder = props => {
  const { getIngredients } = props;
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    getIngredients();
  }, [getIngredients]);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients).reduce((sum, igKey) => {
      return sum + ingredients[igKey];
    }, 0);

    return sum > 0;
  }

 const  togglePurchaseHandler = () => {
    if (props.isAuthenticated) {    
      setPurchasing(!purchasing);
    } else {
      props.setAuthRedirectPath('/checkout');
      props.history.push('/auth');
    }
  }

  const purchaseContinueHandler = () => {
    props.initOrder();
    props.history.push('/checkout');    
  }

    const disabledInfo = {
      ...props.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = props.error ? <p>Ingredients can't be loader</p> : <Spinner />;
    if (props.loading) burger = <Spinner />;

    if (props.ingredients) {
      burger = (
      <Aux>
        <Burger ingredients={props.ingredients} />
        <BuildControls
          ingredientAdded={ props.onIngredientAdded}
          ingredientRemoved={props.onIngredientRemoved}
          disabled={disabledInfo}
          purchaseable={updatePurchaseState(props.ingredients)}
          ordered={togglePurchaseHandler}
          price={props.price}
          isAuthenticated={props.isAuthenticated}
        />
      </Aux>);

      orderSummary = <OrderSummary 
        ingredients={props.ingredients} 
        price={props.price}
        purchaseCanceled={togglePurchaseHandler}
        purchaseContinued={purchaseContinueHandler}
      />;
    }

    return (
      <Aux>
        <Modal
          show={purchasing}
          modalClosed={togglePurchaseHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
}

export default BurgerBuilder;
