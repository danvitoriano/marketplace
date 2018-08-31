import React from "react";
import Header from "./Header";
import { css } from "glamor";

const styles = {
  container: css({
    fontFamily: "Raleway",
    maxWidth: 340,
    margin: "0 auto",
    "> div": {
      textAlign: "right"
    },
    "> code": {
      margin: 10,
      fontSize: 48
    },
    "@media(min-width: 570px)": {
      maxWidth: 1024,
      margin: "0 auto"
    }
  })
};

function Error() {
  return (
    <div {...styles.container}>
      <Header backButton />
      <code>404 Error</code>
    </div>
  );
}

export default Error;
