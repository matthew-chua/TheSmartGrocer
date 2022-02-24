import React, { useEffect, useState } from "react";
import classes from "./CartPage.module.css";
import CartItem from "../Components/CartItem";

import left from "../Assets/circle-chevron-left-solid.svg";
import right from "../Assets/circle-chevron-right-solid.svg";
import NavBar from "../Components/NavBar";
import Recommendation from "../Components/Recommendation";

export default function CartPage() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const price = 120;

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("results")));
    cartItems.forEach((item) => {});
  }, []);

  useEffect(() => {
    if (cartItems) {
      setNumberOfItems(cartItems.length);
    }
  }, [cartItems]);

  const cheapestHandler = () => {};

  const nearestHandler = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
    });
  };

  const reccs = [
    {
      location: "FairPrice Xtra (Jurong Point)",
      info: "$122",
      locationID: "ChIJgUbEo8cfqokR5lP9_Wh_DaM"
    },
    {
      location: "FairPrice Xtra (Segar Rd)",
      info: "12km",
      locationID: "GhIJQWDl0CIeQUARxks3icF8U8A"
    },
  ];

  return (
    <div>
      <NavBar />
      <div className={classes.title}>
        <h1 className={classes.header}>Shopping List</h1>
        <h2 className={classes.subtitle}>
          Save your favourite items here for easy access!
        </h2>
      </div>

      {/* <div className={classes.navigator}>
        <img src={left} className={classes.icon_left} />
        <img src={right} className={classes.icon_right} />
      </div> */}
      {!cartItems && <h1 className={classes.error}>Your cart is empty 😔</h1>}
      {cartItems && (
        <div className={classes.results}>
          {cartItems.map((item) => (
            <CartItem data={item} key={item.key} />
          ))}
        </div>
      )}

      {/* <div className={classes.cartlist}>
        <CartItem />
        <CartItem />
      </div> */}
      {cartItems && (
        <div>
          <div className={classes.body}>
            <p className={classes.text}>Check availability for :</p>
            <p className={classes.textBold}>{numberOfItems} items</p>
          </div>
          <div className={classes.body}>
            <p className={classes.text}>Total Price :</p>
            <p className={classes.textBold}>${price} </p>
          </div>
          <div className={classes.title}>
            <p className={classes.subtitle}>I want the:</p>
          </div>
          <div className={classes.btnContainer}>
            <button className={classes.btn1}>
              <p className={classes.btnText}>📍 Nearest</p>
            </button>
            <button className={classes.btn2}>
              <p className={classes.btnText}>💸 Cheapest</p>
            </button>
          </div>

          <div className={classes.store}>
            <h1 className={classes.header2}>Recommended Stores</h1>
            {reccs.map((recc) => (
              <Recommendation data={recc} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
