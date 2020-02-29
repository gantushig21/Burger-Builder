import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Layout from "../hoc/Layout";
import BurderBuilder from "../containers/BurgerBuilder";
import Checkout from '../containers/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurderBuilder}/>
            <Route path="/checkout" component={Checkout}/>
          </Switch>
        </Layout>
      </div>
    );
  }
  
}

export default App;
