import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Layout from "../hoc/Layout";
import BurderBuilder from "../containers/BurgerBuilder";
import Checkout from '../containers/Checkout';
import Orders from '../containers/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/" exact component={BurderBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
  
}

export default App;
