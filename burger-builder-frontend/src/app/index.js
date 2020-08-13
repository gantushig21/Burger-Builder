import React, { useEffect, Suspense } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from "../hoc/Layout";
import BurderBuilder from "../containers/BurgerBuilder";
import Logout from '../containers/Auth/Logout';

import { authCheckState } from '../containers/Auth/actions';

const Checkout = React.lazy(() => {
  return import('../containers/Checkout');
});

const Orders = React.lazy(() => {
  return import('../containers/Orders');
});
const Auth = React.lazy(() => {
  return import('../containers/Auth');
});


const App = props => {
    useEffect(() => {
      props.checkAuthentication();
    }, [props]);

    let routes = null;

    if (props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/auth" render={props => <Auth {...props} />}/>
          <Route path="/checkout" render={props => <Checkout {...props} />}/>
          <Route path="/orders" render={props => <Orders {...props} />}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/" exact component={BurderBuilder}/>
          <Redirect to="/" />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
            <Route path="/auth" render={props => <Auth {...props} />}/>
            <Route path="/" exact component={BurderBuilder}/>
            <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
            <Suspense
              fallback={<p>Loading...</p>}
            >
              {routes}
            </Suspense>
        </Layout>
      </div>
    );
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
