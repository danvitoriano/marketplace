import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductListItem from "./components/ProductListItem";
import Error from "./components/Error";
import "./App.css";

// app main
const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/:product_id" component={ProductListItem} />
      <Route component={Error} />
    </Switch>
  </main>
);

export default App;
