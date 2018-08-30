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
import Transaction from "../components/Transaction";
import Error from "../components/Error";
import App from "../App";
import ModalContainer from "../components/ModalContainer";

const data = {
  photo: "http://placeimg.com/300/300/tech?t=0.9092886565889047",
  name: "Refined Concrete Soap",
  title: "Refined Concrete Soap",
  id: 98715,
  product_id: 98715,
  price: "848.00",
  amount: "84800",
  tid: 4198520,
  label: "Transaction ID"
};

storiesOf("Button", module).add("with text clicked", () => (
  <Button onClick={action("clicked")} label={data.label} />
));

storiesOf("Link", module).add("with text", () => (
  <Link href="/" label={data.label} />
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
  () => <TransactionInfo label={data.label} value={data.tid} />
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
    <MemoryRouter
      initialEntries={[{ pathname: "/" + data.id }]}
      initialIndex={1}
    >
      {story()}
    </MemoryRouter>
  ))
  .add("pathname: '/:product_id'", () => <App />);

storiesOf("Error", module).add("route not found", () => <Error />);

storiesOf("Transaction", module).add("show transaction receipt", () => (
  <Transaction
    transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
  />
));

storiesOf("ModalContainer", module).add("open a modal render", () => (
  <ModalContainer
    show={{ tid: data.tid, amount: data.amount, items: [data] }}
    render={
      <Transaction
        transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
      />
    }
  />
));
