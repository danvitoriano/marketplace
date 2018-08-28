import React from "react";

function Link(props) {
  return (
    <a href={props.href} className={props.className}>
      {props.label}
    </a>
  );
}

export default Link;
