import React, { Component } from "react";

import Layout from "../hoc/Layout";
import BurderBuilder from "../containers/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurderBuilder />
        </Layout>
      </div>
    );
  }
  
}

export default App;
