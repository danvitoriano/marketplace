import React from "react";
import { css } from "glamor";

const styles = {
  container: css({
    fontFamily: "Raleway",
    margin: 10,
    fontWeight: 300,
    fontSize: 18,
    lineHeight: 1.5,
    "> div:first-child": {
      fontSize: 12
    },
    "> div:last-child": {
      fontSize: 14
    }
  })
};

function ProductInfo(props) {
  return (
    <div {...styles.container}>
      <div>{props.id}</div>
      <div>{props.name}</div>
      <div>R$ {props.price}</div>
    </div>
  );
}

export default ProductInfo;
