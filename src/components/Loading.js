import React from "react";
import { css, style } from "glamor";

const round = css.keyframes({
  to: { transform: "rotate(360deg)" }
});

const styles = {
  loading: css({
    position: "relative",
    background: "transparent",
    zIndex: "1",
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
        width: 45,
        height: 45,
        animation: `${round} .6s linear infinite`
      }
    }
  })
};

function Loading(props) {
  var height;
  props.small ? (height = "px") : (height = "vh");
  return (
    <div
      data-cy="loading"
      {...styles.loading}
      {...style({ height: `${"100" + height}` })}
    >
      <div>
        <div />
      </div>
    </div>
  );
}

export default Loading;
