import React, { useEffect, useState } from "react";
import classes from "./CartPage.module.css";
import CartItem from "../Components/CartItem";

import left from "../Assets/circle-chevron-left-solid.svg";
import right from "../Assets/circle-chevron-right-solid.svg";
import NavBar from "../Components/NavBar";
import Recommendation from "../Components/Recommendation";

export default function CartPage() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const price = 23;

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
  const [cheapest, setCheapest] = useState(true);

  const cheapestHandler = () => {
    setCheapest(true);
  };

  const nearestHandler = async () => {
    setCheapest(false);
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
    });
  };

  const reccs = [
    {
      location: "FairPrice Xtra (Jurong Point)",
      info: "$23",
      locationID: "ChIJmRnrx-wP2jERsMlAFDWng68",
    },
    {
      location: "ShengShiong Jurong West Ave 5",
      info: "$26",
      locationID: "ChIJpSUUNq0P2jERckCJMy3euQ4",
    },
  ];
  const nearest = [
    {
      location: "ShengShiong Jurong West Ave 5",
      info: "3km",
      locationID: "ChIJpSUUNq0P2jERckCJMy3euQ4",
    },
    {
      location: "FairPrice Xtra (Jurong Point)",
      info: "5km",
      locationID: "ChIJmRnrx-wP2jERsMlAFDWng68",
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
            <button className={classes.btn1} onClick={nearestHandler}>
              <p className={classes.btnText}>📍 Nearest</p>
            </button>
            <button className={classes.btn2} onClick={cheapestHandler}>
              <p className={classes.btnText}>💸 Cheapest</p>
            </button>
          </div>

          <div className={classes.store}>
            <h1 className={classes.header2}>Recommended Stores</h1>
            {cheapest && reccs.map((recc) => <Recommendation data={recc} />)}

            {!cheapest && nearest.map((recc) => <Recommendation data={recc} />)}
          </div>
        </div>
      )}
    </div>
  );
}
