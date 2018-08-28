import React from "react";
import { css } from "glamor";

const styles = {
  button: css({
    display: "block",
    padding: 20,
    margin: 10,
    fontSize: 17,
    backgroundColor: "yellowgreen",
    background: "linear-gradient(yellowgreen, green)",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
    textAlign: "center",
    fontFamily: "Raleway"
  })
};

function Button(props) {
  return (
    <button onClick={props.onClick} data-cy={props.dataCy} {...styles.button}>
      {props.label}
    </button>
  );
}

export default Button;
