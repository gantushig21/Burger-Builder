import React from "react";

import BuildControl from "./BuildControl";

import classes from "./BuildControls.css";

const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong> {props.price.toFixed(2)}</strong>
    </p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      {props.isAuthenticated ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
    </button>
  </div>
);

export default buildControls;
