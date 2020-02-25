import React, { Component } from "react";

import Layout from "../hoc/Layout";
import BurderBuilder from "../containers/BurgerBuilder";
import Checkout from '../containers/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurderBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
  
}

export default App;
