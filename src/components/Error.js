import React from "react";
import Header from "./Header";
import { css } from "glamor";

const styles = {
  container: css({
    fontFamily: "Raleway",
    margin: "0 auto"
  }),
  error: css({
    margin: "30px auto",
    textAlign: "center",
    fontSize: 28,
    color: "red"
  })
};

function Error(props) {
  return (
    <div {...styles.container}>
      <Header backButton />
      {props.status ? (
        <div {...styles.error}>{props.status}</div>
      ) : (
        <div {...styles.error}>ERROR</div>
      )}
    </div>
  );
}

export default Error;
