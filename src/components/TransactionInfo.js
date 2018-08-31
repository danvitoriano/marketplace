import React from "react";
import { css } from "glamor";

const styles = {
  container: css({
    fontFamily: "Raleway",
    margin: 10,
    "> div": {
      backgroundColor: "yellowgreen",
      color: "white",
      fontWeight: 300,
      padding: "5px 0",
      textIndent: 10
    }
  })
};

function TransactionInfo(props) {
  return (
    <div {...styles.container}>
      <div>{props.label}: </div>
      {props.value}
    </div>
  );
}
export default TransactionInfo;
