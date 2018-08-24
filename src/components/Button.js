import React from "react";

function Button(props) {
  return (
    <div className="column button">
      <button onClick={props.onClick}>{props.label}</button>
      <p>
        <a href="/">Voltar para Lista de Produtos</a>
      </p>
    </div>
  );
}

export default Button;
