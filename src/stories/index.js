import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MemoryRouter } from "react-router-dom";
import Button from "../components/Button";
import Link from "../components/Link";
import Header from "../components/Header";
import ProductInfo from "../components/ProductInfo";
import ProductItem from "../components/ProductItem";
import TransactionInfo from "../components/TransactionInfo";
import Error from "../components/Error";
import App from "../App";
// import "../App.css";

const data = {
  photo: "https://placehold.it/300/B21DCF/ffffff?text=Refined Concrete Soap",
  name: "Refined Concrete Soap",
  id: 98715,
  product_id: 98715,
  price: "848.00"
};

storiesOf("Button", module).add("with text clicked", () => (
  <Button onClick={action("clicked")} label="Hello Button" />
));

storiesOf("Link", module).add("with text", () => (
  <Link href="/" label="Hello Link" />
));

storiesOf("Header", module)
  .add("with back link", () => <Header backButton />)
  .add("just header", () => <Header />);

storiesOf("ProductInfo", module)
  .add("with buy props, do not show link", () => (
    <ProductInfo name={data.name} id={data.id} price={data.price} buy />
  ))
  .add("with no buy props, render link to /:product-item", () => (
    <ProductInfo
      name={data.name}
      id={data.id}
      price={data.price}
      onClick={action("clicked")}
    />
  ));

storiesOf("ProductItem", module)
  .add("with buy props, do not show link", () => (
    <ProductItem data={data} buy />
  ))
  .add("with no buy props, show link with /:product_id", () => (
    <ProductItem data={data} />
  ));

storiesOf("TransactionInfo", module).add(
  "with buy props, do not show link",
  () => <TransactionInfo label="Transaction ID" value="123456" />
);

storiesOf("ProductList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={[{ pathname: "/" }]} initialIndex={1}>
      {story()}
    </MemoryRouter>
  ))
  .add("pathname: '/'", () => <App />);

storiesOf("ProductListItem", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={[{ pathname: "/17662" }]} initialIndex={1}>
      {story()}
    </MemoryRouter>
  ))
  .add("pathname: '/:product_id'", () => <App />);

storiesOf("Error", module).add("route not found", () => <Error />);
