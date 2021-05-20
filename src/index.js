import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import App from "./App";
import UniqueItem from "./uniqueitem";
import Header from "./header";
import Items from "./items";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Cart } from "./cart";

import Header2 from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Main from "./MyComponents/main";
import About from "./MyComponents/about";

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
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route exact path="/aboutus">
          <About></About>
        </Route>
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
        <Route
          exact
          path="/item/:id"
          children={<UniqueItem val={arr}></UniqueItem>}
        ></Route>
        <Footer></Footer>
      </Router>
    </>
  );
}
export default BookList;
ReactDom.render(<BookList />, document.getElementById("root"));
