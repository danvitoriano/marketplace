import React from "react";

function Link(props) {
  return <a href={props.href}>{props.label}</a>;
}

export default Link;
