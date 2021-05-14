import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import App from "./App";
import Header from "./header";
import Items from "./items";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Cart } from "./cart";
function BookList({ value }) {
  const [v, cv] = useState(1);
  const [arr, changearr] = useSatate([]);
  return (
    <Pass value={(arr, changearr)}>
      <Router>
        <Header v={v}></Header>
        <Route exact path="/">
          <App></App>
        </Route>
        <Route exact path="/cart">
          <Items></Items>
        </Route>
      </Router>
    </Pass>
  );
}
export default BookList;
ReactDom.render(<BookList />, document.getElementById("root"));
