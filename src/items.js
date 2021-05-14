import React from "react";
import { Cart } from "./cart";
import Item from "./item";
const Items = () => {
  console.log(Cart.length, "lenght");
  // return <h1>hello wordl</h1>;
  const v = "Cart empty";
  if (Cart.length) {
    return (
      <>
        <div className="container">
          {Cart.map((prop) => {
            return <Item key={prop.val} {...prop}></Item>;
          })}
        </div>
        )
      </>
    );
  } else return <h1>Cart emptys</h1>;
};

export default Items;
