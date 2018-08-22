import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductListItem from "./components/ProductListItem";
import Error from "./components/Error";

// app main
const App = () => (
  <main>
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={ProductList} />
      <Route exact path="/products/" component={ProductList} />
      <Route path="/products/:product_id" component={ProductListItem} />
      <Route component={Error} />
    </Switch>
  </main>
);

export default App;
