import React, { useContext, useState, useEffect } from "react";
// import { Cart } from "./cart";
import Item from "./item";
import { Path } from "./index";
import Modal from "./modal";
const Items = ({ wow }) => {
  const { arr } = useContext(Path);
  const [pr, cpr] = useState(0);
  useEffect(() => {
    let varr = 0;
    arr.map((prop) => {
      varr = varr + prop.price;
    });
    cpr(varr);
  });

  if (arr.length) {
    return (
      <>
        <div className="container">
          {arr.map((prop, Index) => {
            return (
              <>
                <Item {...prop} key={prop.val}></Item>
              </>
            );
          })}
          <h1>Total Price:{pr}</h1>
          <Modal
            btext="place your order"
            text="your order has been placed"
          ></Modal>
        </div>
      </>
    );
  } else
    return (
      <>
        <h1 className=" container my-4 text-center">
          Please! Add your item into Cart :)
        </h1>
        <h1 className=" text-center">
          <i className="fas fa-cart-arrow-down fa-5x"> </i>
        </h1>
      </>
    );
};

export default Items;
