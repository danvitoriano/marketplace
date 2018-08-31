import React from "react";
import { css } from "glamor";

const bounce = css.keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" }
});

const styles = {
  loading: css({
    position: "relative",
    background: "transparent",
    zIndex: "1",
    height: "100vh",
    "> div": {
      margin: 0,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      "> div": {
        border: "16px solid gainsboro",
        borderTop: "16px solid yellowgreen",
        borderRadius: "50%",
        width: 120,
        height: 120,
        animation: `${bounce} 2s linear infinite`
      }
    }
  })
};

function Loading() {
  return (
    <div data-cy="loading" {...styles.loading}>
      <div>
        <div />
      </div>
    </div>
  );
}

export default Loading;
