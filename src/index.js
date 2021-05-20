import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import App from "./App";
import Header from "./header";
import Items from "./items";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Cart } from "./cart";
export const Path = React.createContext();
export const Pathh = React.createContext();
function BookList() {
  const [arr, changearr] = useState([]);
  const remove = (novalue) => {
    changearr((arr) => {
      return arr.filter((idvalue) => {
        return idvalue.val !== novalue;
      });
    });
  };
  const [vall, cval] = useState(0);

  return (
    <>
      <Router>
        <Header v={vall}></Header>
        <Route exact path="/order">
          <Pathh.Provider value={{ vall, cval }}>
            <App wow={{ arr, changearr }}></App>
          </Pathh.Provider>
        </Route>
        <Route exact path="/cart">
          <Path.Provider value={{ arr, remove, vall, cval }}>
            <Items></Items>
          </Path.Provider>
        </Route>
      </Router>
    </>
  );
}
export default BookList;
ReactDom.render(<BookList />, document.getElementById("root"));
