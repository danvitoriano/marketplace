import React from "react";

var styles = {
  display: "block"
};
function LinkWrapper(props) {
  if (!props.data.buy) {
    return (
      <a href={"/" + props.data.id} data-cy={props.data.id} style={styles}>
        {props.children}
      </a>
    );
  } else {
    return <div>{props.children}</div>;
  }
}

function ProductInfo(props) {
  return (
    <LinkWrapper color="blue" data={props}>
      <div className="container">
        <h4>
          {props.id} — <b>{props.name}</b>
        </h4>
        <p>{props.price}</p>
      </div>
    </LinkWrapper>
  );
}

export default ProductInfo;
