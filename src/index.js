import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import App from "./App";
import Header from "./header";
import Items from "./items";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Cart } from "./cart";
export const Path = React.createContext();
function BookList() {
  const [v, cv] = useState(1);
  const [arr, changearr] = useState([]);
  const remove = (novalue) => {
    changearr((arr) => {
      return arr.filter((idvalue) => {
        return idvalue.val !== novalue;
      });
    });
  };
  return (
    <>
      <Router>
        <Header v={v}></Header>
        <Route exact path="/order">
          <App wow={{ arr, changearr }}></App>
        </Route>
        <Route exact path="/cart">
          <Path.Provider value={{ arr, remove }}>
            <Items></Items>
          </Path.Provider>
        </Route>
      </Router>
    </>
  );
}
export default BookList;
ReactDom.render(<BookList />, document.getElementById("root"));
