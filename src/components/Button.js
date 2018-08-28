import React from "react";
import { css } from "glamor";

const styles = {
  button: css({
    padding: 20,
    margin: 0,
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
    <div className="column button">
      <button onClick={props.onClick} data-cy={props.dataCy} {...styles.button}>
        {props.label}
      </button>
    </div>
  );
}

export default Button;
