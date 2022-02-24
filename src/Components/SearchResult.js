import React from "react";

import classes from "./SearchResult.module.css";
import beer from "../Assets/beer.jpg";
import { useNavigate } from "react-router-dom";

export default function SearchResult(props) {
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate(`/${props.data.itemID}`);
  };

  return (
    <div className={classes.root} onClick={redirectHandler}>
      <img src={beer} className={classes.image} />
      <div className={classes.text}>
        <h1 className={classes.name}>{props.data.name}</h1>
        <p className={classes.quantity}>{props.data.quantity}</p>
        <p className={classes.quantity}>{props.data.reviews}</p>

        <div className={classes.bottom}>
          <h3 className={classes.price}>$ {props.data.price}</h3>
          <div className={classes.icon}>
            <i class="fa fa-bookmark"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
