import React from "react";
import { css } from "glamor";

const styles = {
  container: css({
    fontFamily: "Raleway",
    margin: 10,
    "> div:first-child": {
      backgroundColor: "yellowgreen",
      color: "white",
      fontWeight: 300,
      padding: "5px 10px",
      textIndent: 10,
      display: "inline-block"
    }
  })
};

function TransactionInfo(props) {
  return (
    <div {...styles.container}>
      <div>{props.label}: </div>
      <div>{props.value}</div>
    </div>
  );
}
export default TransactionInfo;
