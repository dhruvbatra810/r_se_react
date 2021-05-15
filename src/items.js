import React, { useContext, useState } from "react";
// import { Cart } from "./cart";
import Item from "./item";
import { Path } from "./index";
const Items = ({ wow }) => {
  const { arr, remove } = useContext(Path);
  // console.log(arr);
  // const [pr, cpr] = useState(0);
  if (arr.length) {
    return (
      <>
        <div className="container">
          {arr.map((prop, Index) => {
            return (
              <>
                <Item {...prop} key={Index}></Item>
              </>
            );
          })}
        </div>
      </>
    );
  } else return <h1>Cart emptys</h1>;
};

export default Items;
