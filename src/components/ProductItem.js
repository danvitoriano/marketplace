import React from "react";
import ProductInfo from "./ProductInfo";

function ProductItem(props) {
  return (
    <div className="column">
      <div className="card">
        <img src={props.data.photo} alt={props.data.name} />
        <ProductInfo
          name={props.data.name}
          id={props.data.product_id}
          price={props.data.price}
          buy={props.buy}
        />
      </div>
    </div>
  );
}

export default ProductItem;
