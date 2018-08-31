import React from "react";
import Link from "./Link";
import { css } from "glamor";

const styles = {
  container: css({
    display: "block",
    backgroundColor: "gainsboro",
    fontFamily: "Raleway"
  }),
  wrapper: css({
    display: "grid",
    padding: "1rem",
    gridTemplateColumns: "auto auto",
    margin: "0 auto",
    "> h1 a": {
      textDecoration: "none",
      color: "#222",
      "&:hover": {
        textShadow: "0 0 1px gray"
      }
    },
    "@media(min-width: 570px)": {
      maxWidth: 1024,
      margin: "0 auto"
    }
  }),
  back: css({
    textAlign: "right"
  })
};

function Header(props) {
  return (
    <div {...styles.container} data-cy="header">
      <div {...styles.wrapper}>
        <h1>
          <a href="/">Marketplace</a>
        </h1>
        <div {...styles.back}>
          {!props.backButton ? null : (
            <Link dataCy="back" href="/" label="Voltar" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
