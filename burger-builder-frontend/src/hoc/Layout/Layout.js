import React, { useState } from "react";

import Aux from "../Aux";
import classes from "./Layout.css";

import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer';

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  }

  return (
    <Aux>
      <Toolbar 
        isAuthenticated={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler} 
      />
      <SideDrawer 
        open={showSideDrawer}
        closed={sideDrawerClosedHandler} 
        isAuthenticated={props.isAuthenticated}
      />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );  
}

export default Layout;
