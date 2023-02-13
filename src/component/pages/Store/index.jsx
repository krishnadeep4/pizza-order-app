import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { pizzaAsync } from "../../../redux/asyncThunk/pizzas.asyncThunk";
import pizzaData from "../../../utils/constants/pizzaData.json";
import PrimeCard from "../../atoms/card";
import { useSelector } from "react-redux";
import { addItem } from "../../../redux/slices/cart.slice";

function Store() {
  const [response, setResponse] = useState(pizzaData);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onAddCart = (id) => {
    dispatch(addItem(id));
    console.log(items);
  };
  const getPizza = () => {
    dispatch(pizzaAsync())
      .unwrap()
      .then((res) => {
        console.log(res?.data?.results);
        setResponse(pizzaData);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        paddingTop: "30px",
        justifyContent: "space-evenly",
        gap: "70px",
        flexWrap: "wrap",
      }}
    >
      {response.map((item, ind) => {
        return (
          <PrimeCard
            type={"store"}
            alt={item.name}
            src={item.img}
            title={item.name}
            description={item.description}
            price={item.sizeandcrust[0].mediumPan[0].price}
            key={ind}
            id={item.key}
            onAddCart={onAddCart}
          />
        );
      })}
    </div>
  );
}

export default Store;
