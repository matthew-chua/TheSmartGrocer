import React from "react";

import classes from "./SearchResult.module.css";
import beer from "../Assets/beer.jpg";
import { useNavigate } from "react-router-dom";

export default function SearchResult(props) {
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate(`/${props.data.itemID}`);
  };

  const cartHandler = () => {
    props.addToCartHandler(props.data);
  }

  const addToCart = () => {
    try{
      const old = JSON.parse(localStorage.getItem("results"))
      old.push(props.data);
      localStorage.setItem("results", JSON.stringify(old));
    }catch{
      localStorage.setItem("results", JSON.stringify([props.data]))
    }
  }

  return (
    <div className={classes.root} >
      <img src={beer} className={classes.image} onClick={redirectHandler}/>
      <div className={classes.text}>
        <h1 className={classes.name}>{props.data.name}</h1>
        <p className={classes.quantity}>{props.data.quantity}</p>
        <p className={classes.quantity}>{props.data.reviews}</p>

        <div className={classes.bottom}>
          <h3 className={classes.price}>$ {props.data.price}</h3>
          <div className={classes.icon}>
            <i class="fa fa-bookmark" onClick={addToCart}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
