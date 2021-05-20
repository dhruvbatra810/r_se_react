import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Medicines } from "./medicines";
const UniqueItem = () => {
  const { id } = useParams();
  const [imgg, cimg] = useState();
  const [name, cname] = useState();
  const [price, cprice] = useState();
  const [des, cdes] = useState();
  useEffect(() => {
    const item = Medicines.find((person) => {
      return person.id === parseInt(id);
    });
    cimg(item.url);
    cname(item.name);
    cprice(item.price);
    cdes(item.para);
  }, []);
  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="text-center mt-2">
          <img src={imgg} className="rounded img-fluid" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bolder fs-1">{name}</h5>
          <p className="card-text fs-5">{des}</p>
          <p className="card-text">
            <small className="fs-3">Rs {price}.00</small>
          </p>
        </div>
      </div>
    </div>
  );
};
export default UniqueItem;
