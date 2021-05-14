import React, { useState, useEffect } from "react";
import { Medicines } from "./medicines";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Cart } from "./cart";
// import Header from "./header";
import BookList from "./index";
// import ""
const App = () => {
  return (
    <div className="container">
      <div className="row">
        <>
          {Medicines.map((prop) => {
            return <Card {...prop} key={prop.id}></Card>;
          })}
        </>
      </div>
    </div>
  );
};
const Card = ({ url, name, price, id }) => {
  const [value, ChangeValue] = useState(0);
  const val = new Date().getTime().toFixed();
  const addit = (name, id, url, price) => {
    Cart.push({ url, id, name, price, val });
    ChangeValue(value + 1);
  };
  useEffect(() => {
    console.log(value);
    return <BookList v={value}></BookList>;
  }, [value]);
  return (
    <>
      <div className="col" style={{ padding: "1rem" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p>{price}</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                addit(name, id, url, price);
              }}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
