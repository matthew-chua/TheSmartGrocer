import React from "react";
import classes from "./CartItem.module.css";
import { useState, useEffect } from "react";

export default function CartItem() {
  const [count, setCount] = useState(1);
  const plusOne = (e) => {
    e.preventDefault();

    setCount(() => count + 1);
  };

  const minusOne = (e) => {
    e.preventDefault();
    if (count > 1) {
      setCount(() => count - 1);
    }
  };
  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src="https://produits.bienmanger.com/5799-0w0h0_Kirin_Ichiban_Biere_Blonde_Japonaise.jpg"
      />
      <h4 className={classes.header}>Kirin Ichiban</h4>
      <p className={classes.content}>12 x 350ml</p>

      <div className={classes.body}>
        <p className={classes.price}>$40</p>
        <div className={classes.maxPax}>
          <button className={classes.minusButton} onClick={minusOne}>
            -
          </button>

          <p className={classes.count} type="number">
            {count}
          </p>
          <button className={classes.addButton} onClick={plusOne}>
            +
          </button>
        </div>
      </div>

      <p className={classes.subtext}>Available at 4 locations within 5km</p>
    </div>
  );
}
