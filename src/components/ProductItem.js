import React from "react";
import ProductInfo from "./ProductInfo";
import ModalContainer from "./ModalContainer";
import Button from "./Button";
import { css } from "glamor";

import Transaction from "./Transaction";

const styles = {
  card: css({
    display: "grid",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: 16,
    backgroundColor: "whitesmoke",
    maxWidth: 300
  }),
  detail: css({
    display: "grid",
    gridTemplateColumns: "auto",
    padding: 16,
    backgroundColor: "white",
    maxWidth: 340,
    margin: "0 auto",
    "@media(min-width: 570px)": {
      gridTemplateColumns: "350px auto",
      maxWidth: 1024,
      margin: "0 auto"
    }
  })
};

function ProductItem(props) {
  switch (props.buy) {
    case "buy":
      return (
        <div data-cy="detail" {...styles.detail}>
          <img src={props.data.photo} alt={props.data.name} />
          <div>
            <ProductInfo
              name={props.data.name}
              id={props.data.product_id}
              price={props.data.price}
              buy={props.buy}
            />
            <Button
              onClick={props.onClick}
              label="Comprar"
              dataCy="buy-button"
            />
            {props.transaction !== null ? (
              <ModalContainer
                show={props.transaction}
                render={<Transaction transaction={props.transaction} />}
              />
            ) : null}
          </div>
        </div>
      );
    default:
      return (
        <div data-cy="card" {...styles.card}>
          <img src={props.data.photo} alt={props.data.name} />
          <ProductInfo
            name={props.data.name}
            id={props.data.product_id}
            price={props.data.price}
            buy={props.buy}
          />
        </div>
      );
  }
}

export default ProductItem;
