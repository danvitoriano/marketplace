import React from "react";
import Link from "./Link";

function Header(props) {
  return (
    <div className="header">
      <div>
        <h1>Marketplace</h1>
      </div>
      <div>
        {!props.backButton ? null : (
          <Link className="back" href="/" label="Voltar" />
        )}
      </div>
    </div>
  );
}

export default Header;
