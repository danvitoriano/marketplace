import React from "react";
import { css } from "glamor";

const styles = {
  container: css({
    fontFamily: "Raleway",
    "> h4": {
      fontWeight: 300,
      fontSize: 20
    }
  }),
  link: css({
    display: "block",
    textDecoration: "none"
  })
};

function LinkWrapper(props) {
  if (!props.data.buy) {
    return (
      <a href={"/" + props.data.id} data-cy={props.data.id} {...styles.link}>
        {props.children}
      </a>
    );
  } else {
    return <div>{props.children}</div>;
  }
}

function ProductInfo(props) {
  return (
    <LinkWrapper data={props}>
      <div {...styles.container}>
        <h4>
          {props.id} — <b>{props.name}</b>
        </h4>
        <p>R$ {props.price}</p>
      </div>
    </LinkWrapper>
  );
}

export default ProductInfo;
