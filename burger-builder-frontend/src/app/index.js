import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from "../hoc/Layout";
import BurderBuilder from "../containers/BurgerBuilder";
import Checkout from '../containers/Checkout';
import Orders from '../containers/Orders';
import Auth from '../containers/Auth';
import Logout from '../containers/Auth/Logout';

import { authCheckState } from '../containers/Auth/actions';

class App extends Component {
  componentDidMount() {
    this.props.checkAuthentication();
  }

  render() {
    let routes = (
      <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/" exact component={BurderBuilder}/>
          <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/logout" component={Logout}/>
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
