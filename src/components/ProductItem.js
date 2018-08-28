import React from "react";
import ProductInfo from "./ProductInfo";
import { css } from "glamor";

const styles = {
  container: css({
    display: "grid",
    padding: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gridGap: "1rem"
  }),
  card: css({
    display: "grid"
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
