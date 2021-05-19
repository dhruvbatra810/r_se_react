import React, { useState, useEffect, useContext } from "react";
import { Medicines } from "./medicines";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Cart } from "./cart";
import { Pass } from "./index";
// import ""
const App = ({ wow }) => {
  const d = new Date();
  return (
    <div className="container">
      <div className="row">
        <>
          {Medicines.map((prop) => {
            return <Card {...prop} {...wow} key={prop.id}></Card>;
          })}
        </>
      </div>
    </div>
  );
};
const Card = ({ url, name, price, id, arr, changearr, d,para }) => {
  const addit = (name, id, url, price) => {
    changearr(() => {
      const val = parseInt(new Date().getTime(), 10);
      arr.push({ url, id, name, price, val,para });
      return arr;
    });
  };
  return (
    <>
      <div className="col" style={{ padding: "1rem" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top"  alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {para}
            </p>
            <p><b><span>Rs </span>{price}<span></span></b></p>
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
