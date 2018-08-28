import React from "react";

function Link(props) {
  return (
    <a href={props.href} class={props.className}>
      {props.label}
    </a>
  );
}

export default Link;
