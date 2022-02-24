import React from "react";
import classes from "./CartPage.module.css";
import CartItem from "../Components/CartItem";

import left from "../Assets/circle-chevron-left-solid.svg";
import right from "../Assets/circle-chevron-right-solid.svg";
import NavBar from "../Components/NavBar";

export default function CartPage() {
  const item = 1;
  const price = 120;

  const resultArray = [
    {
      itemID: 1,
      name: "Kirin Beer",
      image: "www.google.com",
      reviews: "4.5/5",
      price: "12",
      quantity: "12x330ml",
      stock: 5
    },
    {
      itemID: 2,
      name: "Kirin Black",
      image: "www.google.com",
      reviews: "4.2/5",
      price: "11",
      quantity: "24x330ml",
      stock: 10
    },
    {
      itemID: 3,
      name: "Kirin Black",
      image: "www.google.com",
      reviews: "4.2/5",
      price: "11",
      quantity: "24x330ml",
      stock: 4
    },
  ];

  return (
    <div>
      <NavBar />
      <div className={classes.title}>
        <h1 className={classes.header}>Shopping List</h1>
        <h2 className={classes.subtitle}>
          Save your favourite items here for easy access !
        </h2>
      </div>

      {/* <div className={classes.navigator}>
        <img src={left} className={classes.icon_left} />
        <img src={right} className={classes.icon_right} />
      </div> */}

      <div className={classes.results}>
        {resultArray.map((item) => (
          <CartItem data={item} key={item.key}/>
        ))}
      </div>

      {/* <div className={classes.cartlist}>
        <CartItem />
        <CartItem />
      </div> */}

      <div className={classes.body}>
        <p className={classes.text}>Check availability for :</p>
        <p className={classes.text}>{item} items</p>
      </div>
      <div className={classes.body}>
        <p className={classes.text}>Total Price :</p>
        <p className={classes.text}>${price} </p>
      </div>
      <div className={classes.title}>
        <p className={classes.subtitle}>I want the:</p>
      </div>

      <div className={classes.btnContainer}>
        <button className={classes.btn1}>
          <p>📍 Nearest</p>
        </button>
        <button className={classes.btn2}>
          <p>💸 Cheapest</p>
        </button>
      </div>

      <div className={classes.store}>
        <h1 className={classes.header2}>Recommended Stores</h1>
      </div>
    </div>
  );
}
