import React from "react";
function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function ProductInfo(props) {
  return (
    <FancyBorder color="blue">
      <div className="container">
        <h4>
          {props.id} — <b>{props.name}</b>
        </h4>
        <p>{props.price}</p>
        <a href={"/products/" + props.id}>
          {props.buy ? "Comprar" : "Detalhes"}
        </a>
      </div>
    </FancyBorder>
  );
}

export default ProductInfo;
