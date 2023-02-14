import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/slices/cart.slice";
import "./cartCard.css";
import { removeItem } from "../../../assets/images";

const CartCard = ({ item, onAddToCart, orgQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
    if (item.key) {
      dispatch(addItem(item.key));
    }
  };

  return (
    <div className={"productCard"}>
      <img className={"productImage"} src={item.img} alt={item.name} />
      <div className={"productInfo"}>
        <div>
          <h3 className={"productName"}>{item.name}</h3>
          <p className={"productDescription"}>{item.description}</p>
        </div>
        <div className={"productActions"}>
          <label htmlFor={orgQuantity} className={"quantityLabel"}>
            Quantity:
          </label>
          <input
            type="number"
            id={orgQuantity}
            className={"quantityInput"}
            min="1"
            value={orgQuantity}
            onChange={handleQuantityChange}
          />
          &nbsp;&nbsp;
          <p>${item.sizeandcrust[0].mediumPan[0].price * orgQuantity}</p>
          &nbsp;&nbsp;
          <button
            className={"addToCartButton"}
            onClick={() => console.log("order placed")}
          >
            Place Order
          </button>
          <button
            className={"removeButton"}
            onClick={() => console.log("removed")}
          >
            <img style={{ width: "30px" }} src={removeItem} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
