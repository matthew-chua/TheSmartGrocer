import React from "react";
import NavBar from "../Components/NavBar";
import Product from "../Components/Product";
import Location from "../Components/Location";
import classes from "./ItemPage.module.css";

import { useNavigate, useParams } from "react-router-dom";

import { useEffect } from "react";
import SearchResult from "../Components/SearchResult";

export default function ItemPage() {

  const params = useParams();
  
  useEffect(()=>{
    
    //make the API call with ITEM ID
    
    //params.item == itemID
    console.log("HERE",params.item);

    //set the location array

    //set the item data


  }, [])

  const locationArray = [
    {
      location: "FairPrice Xtra (Jurong Point)",
      distance: 3,
      openingHours: "Daily, 0900-2300",
      stock: 100,
      price: "$3.80 / bottle",
      promo: false
    },
    {
      location: "FairPrice Xtra (Jurong Point)",
      distance: 3,
      openingHours: "Daily, 0900-2300",
      stock: 100,
      price: "$3.80 / bottle",
      promo: true
    },
  ];

  const itemData = {
    image: "________",
    name: "Kirin Beer",
    country: "Japan",
    description:
      "Clear golden yellow colour with light head; aromas of sweet malt, sour bread, light cereal and soft apple fruit with delicate floral, herb, apple/pear and citrus notes; dry, light bodied, crisp and refreshing.",
  };

  const recommended = [
    {
      itemID: 1,
      name: "Kirin Beer",
      image: "www.google.com",
      reviews: "4.5/5",
      price: "12",
      quantity: "12x330ml",
      stock: 3,
    },
    {
      itemID: 2,
      name: "Kirin Black",
      image: "www.google.com",
      reviews: "4.2/5",
      price: "11",
      quantity: "24x330ml",
      stock: 3,
    },
    {
      itemID: 3,
      name: "Kirin Black",
      image: "www.google.com",
      reviews: "4.2/5",
      price: "11",
      quantity: "24x330ml",
      stock: 3,
    },
  ];

  const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  }

  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <div>
          <p onClick={backHandler}> 🔙 to results</p>
        </div>

        <div className={classes.card}>
          <Product data={itemData}/>
          <p>Based on your location...</p>
          {locationArray.map((location) => (
            <Location data={location} />
          ))}
        </div>

        <div>
          <h1 className={classes.bottomText}>You might also like...</h1>
          <div className={classes.reccs}>
          {recommended.map((item)=>
            (<SearchResult data={item} key={item.itemID}/>)
          )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
