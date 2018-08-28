import React from "react";

function Button(props) {
  return (
    <div className="column button">
      <button onClick={props.onClick} className={props.className}>
        {props.label}
      </button>
    </div>
  );
}

export default Button;
