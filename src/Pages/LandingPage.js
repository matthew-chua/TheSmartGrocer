import React from "react";
import NavBar from "../Components/NavBar";
import classes from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

//assets
import trolley from "../Assets/trolley.png";

export default function LandingPage() {
  const id = "test"

  const navigate = useNavigate();

  const submitHandler = () => {
    
    navigate(`/Results/${id}`);
  };

  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <h1 className={classes.title}>TheSmartGrocer</h1>
        <div className={classes.search}>
          <form id="filterForm" onSubmit={submitHandler}>
            <input className={classes.searchBar}></input>
          </form>
        </div>
        <h2 className={classes.subtitle}>
          Find out if your favorite groceries are currently in stock and compare
          prices between items!
        </h2>
        <img className={classes.image} src={trolley} />
      </div>
    </div>
  );
}
