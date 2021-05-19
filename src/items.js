import React, { useContext, useState, useEffect } from "react";
// import { Cart } from "./cart";
import Item from "./item";
import { Path } from "./index";
const Items = ({ wow }) => {
  const { arr, remove } = useContext(Path);
  console.log(arr);
  const [pr, cpr] = useState(0);
  useEffect(() => {
    let varr = 0;
    arr.map((prop) => {
      varr = varr + prop.price;
    });
    cpr(varr);
  }, []);

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
          <button className="btn btn-primary">Place order</button>
        </div>
        
      </>
    );
  } else return <h1 className=" container my-4 mx-4">Please! Add your item into Cart :)</h1>;
};

export default Items;
