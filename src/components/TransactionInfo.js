import React from "react";
import { css } from "glamor";

const styles = {
  container: css({
    fontFamily: "Raleway",
    margin: 10,
    "> strong": {
      fontWeight: 300,
      fontSize: 18
    }
  })
};

function TransactionInfo(props) {
  return (
    <div {...styles.container}>
      <strong>{props.label}: </strong>
      {props.value}
    </div>
  );
}
export default TransactionInfo;
