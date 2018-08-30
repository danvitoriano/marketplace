import React from "react";
import Link from "./Link";
import { css } from "glamor";

const styles = {
  container: css({
    display: "grid",
    padding: "1rem",
    gridTemplateColumns: "auto auto",
    backgroundColor: "gainsboro",
    fontFamily: "Raleway",
    maxWidth: 320,
    margin: "0 auto",
    "> div": {
      textAlign: "right"
    },
    "@media(min-width: 570px)": {
      maxWidth: 1000,
      margin: "0 auto"
    }
  })
};

function Header(props) {
  return (
    <div {...styles.container} data-cy="header">
      <h1>Marketplace</h1>
      <div>
        {!props.backButton ? null : (
          <Link dataCy="back" href="/" label="Voltar" />
        )}
      </div>
    </div>
  );
}

export default Header;
