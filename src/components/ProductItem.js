import React from "react";
import ProductInfo from "./ProductInfo";
import { css } from "glamor";

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
    gridTemplateColumns: "auto auto",
    padding: 16,
    backgroundColor: "white"
  })
};

function ProductItem(props) {
  switch (props.buy) {
    case "buy":
      return (
        <div data-cy="detail" {...styles.detail}>
          <img src={props.data.photo} alt={props.data.name} />
          <ProductInfo
            name={props.data.name}
            id={props.data.product_id}
            price={props.data.price}
            buy={props.buy}
          />
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
