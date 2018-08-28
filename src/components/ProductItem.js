import React from "react";
import ProductInfo from "./ProductInfo";
import { css } from "glamor";

const styles = {
  card: css({
    display: "grid",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: 16,
    textAlign: "center",
    backgroundColor: "whitesmoke",
    maxWidth: 300
  })
};

function ProductItem(props) {
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

export default ProductItem;
