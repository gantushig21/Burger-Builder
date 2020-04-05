import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from "../hoc/Layout";
import BurderBuilder from "../containers/BurgerBuilder";
import Logout from '../containers/Auth/Logout';

import { authCheckState } from '../containers/Auth/actions';
import asyncComponent from '../hoc/asyncComponent';

const asyncCheckout = asyncComponent(() => {
  return import('../containers/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import('../containers/Orders');
});
const asyncAuth = asyncComponent(() => {
  return import('../containers/Auth');
});


class App extends Component {
  componentDidMount() {
    this.props.checkAuthentication();
  }

  render() {
    let routes = null;

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/auth" component={asyncAuth}/>
          <Route path="/checkout" component={asyncCheckout}/>
          <Route path="/orders" component={asyncOrders}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/" exact component={BurderBuilder}/>
          <Redirect to="/" />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
            <Route path="/auth" component={asyncAuth}/>
            <Route path="/" exact component={BurderBuilder}/>
            <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
            {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkAuthentication: () => dispatch(authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
