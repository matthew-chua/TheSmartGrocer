import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";

import { useParams, useNavigate } from "react-router-dom";
import SearchResult from "../Components/SearchResult";
import classes from "./SearchPage.module.css";

export default function SearchPage() {
  const params = useParams();

  useEffect(() => {
    //call backend api to get a list of results
    console.log("HERE", params.keyword);
  }, []);

  const resultArray = [
    {
      itemID: 1,
      name: "Kirin Beer",
      image: "www.google.com",
      reviews: "4.5/5",
      price: "12",
      quantity: "12x330ml",
      stock: 3
    },
    {
      itemID: 2,
      name: "Kirin Black",
      image: "www.google.com",
      reviews: "4.2/5",
      price: "11",
      quantity: "24x330ml",
      stock: 3
    },
    {
      itemID: 3,
      name: "Kirin Black",
      image: "www.google.com",
      reviews: "4.2/5",
      price: "11",
      quantity: "24x330ml",
      stock: 3
    },
  ];

  
  const clearResults = () => {
    localStorage.clear();
  };

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(`/Results/${input}`);
  };

  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <div className={classes.search}>
          <form id="filterForm" onSubmit={submitHandler}>
            <input
              className={classes.searchBar}
              value={input}
              onInput={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
        <p className={classes.subtitle}>3 results for 'kirin'</p>
        <div className={classes.results}>
          {resultArray.map((item) => (
            <SearchResult data={item} key={item.key}/>
          ))}
        </div>
      </div>
    </div>
  );
}
