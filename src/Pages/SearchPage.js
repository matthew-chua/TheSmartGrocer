import React, { useEffect } from "react";
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
    },
    {
      itemID: 2,
      name: "Kirin Black",
      image: "www.google.com",
      reviews: "4.2/5",
      price: "11",
      quantity: "24x330ml",
    },
    {
      itemID: 3,
      name: "Kirin Black",
      image: "www.google.com",
      reviews: "4.2/5",
      price: "11",
      quantity: "24x330ml",
    },
  ];

  localStorage.setItem("results", JSON.stringify(resultArray));

  const clearResults = () => {
    localStorage.clear();
  };

  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <div className={classes.search}>
          <input className={classes.searchBar} />
        </div>
        <p className={classes.subtitle}>3 results for 'kirin'</p>
        <div className={classes.results}>
          {resultArray.map((item) => (
            <SearchResult data={item} key={item.key} />
          ))}
        </div>
      </div>
    </div>
  );
}
