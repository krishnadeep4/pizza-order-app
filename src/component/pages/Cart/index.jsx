import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { pizzaAsync } from "../../../redux/asyncThunk/pizzas.asyncThunk";
import pizzaData from "../../../utils/constants/pizzaData.json";
import PrimeCard from "../../atoms/card";
import { useSelector } from "react-redux";
import { addItem, deleteItems } from "../../../redux/slices/cart.slice";

function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const deleteAllItems = () => {
    dispatch(deleteItems());
  };
  return (
    <>
      <button onClick={deleteAllItems}>delete</button>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "30px",
          justifyContent: "space-evenly",
          gap: "70px",
        }}
      >
        {items.map((item, ind) => {
          return (
            <PrimeCard
              type="cart"
              alt={pizzaData[item - 1].name}
              src={pizzaData[item - 1].img}
              title={pizzaData[item - 1].name}
              description={pizzaData[item - 1].description}
              price={pizzaData[item - 1].sizeandcrust[0].mediumPan[0].price}
              key={ind}
              id={pizzaData[item - 1].key}
            />
          );
        })}
      </div>
    </>
  );
}

export default Cart;
