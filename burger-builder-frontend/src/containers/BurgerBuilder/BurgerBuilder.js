import React, { Component } from "react";

import withErrorHandler from '../../hoc/WithErrorHandler';
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";
import Spinner from '../../components/UI/Spinner';

import axios from '../../utils/axios';

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
    this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
  }

  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios.get('/ingredients').then(response => {
      this.setState({ ingredients: response.data });
    }).catch(err => {
      this.setState({ error: true });
    });
  }

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

  purchaseContinueHandler() {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Gantushig',
        address: {
          street: 'North street 1000',
          zipCode: '52557',
          country: 'USA'
        },
        email: 'gantushig21@gmail.com'
      },
      deliveryMethod: 'fastest'
    };

    this.setState({ loading: true });
    axios.post('/orders', order)
      .then(response => {
        this.setState({ 
          loading: false,
          purchasing: false
        });
      })
      .catch(error => {
        this.setState({ 
          loading: false, 
          purchasing: false
        });
      });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loader</p> : <Spinner />;

    if (this.state.ingredients) {
      burger = (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          ordered={this.togglePurchaseHandler}
          price={this.state.totalPrice}
        />
      </Aux>);

      orderSummary = <OrderSummary 
        ingredients={this.state.ingredients} 
        price={this.state.totalPrice}
        purchaseCanceled={this.togglePurchaseHandler}
        purchaseContinued={this.purchaseContinueHandler}
      />;
    }
    
    if (this.state.loading)
      orderSummary = <Spinner />

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

export default withErrorHandler(BurgerBuilder, axios);
