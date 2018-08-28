import React from "react";
import Header from "./Header";
import { css } from "glamor";

const styles = {
  container: css({
    fontFamily: "Raleway",
    margin: 0,
    "> code": {
      margin: 10,
      fontSize: 48
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
