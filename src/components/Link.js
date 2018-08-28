import React from "react";
import { css } from "glamor";

const styles = {
  link: css({
    backgroundColor: "yellowgreen",
    color: "white",
    padding: "10px 20px",
    textTransform: "uppercase",
    fontSize: 15,
    borderRadius: 3,
    textDecoration: "none",
    transition: "0.1s",
    margin: 10
  })
};

function Link(props) {
  return (
    <a href={props.href} data-cy={props.dataCy} {...styles.link}>
      {props.label}
    </a>
  );
}

export default Link;
