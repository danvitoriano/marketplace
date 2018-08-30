import React from "react";
import { css } from "glamor";

const styles = {
  container: css({
    fontFamily: "Raleway",
    margin: 10,
    fontWeight: 300,
    fontSize: 18,
    lineHeight: 1.5,
    "> div:first-child": {
      fontSize: 12
    },
    "> div:last-child": {
      fontSize: 14
    }
  }),
  link: css({
    display: "block",
    textDecoration: "none",
    transition: 0.1,
    color: "green",
    "&:after": {
      content: "''",
      display: "inline-block",
      width: "100%",
      borderBottom: "1px solid",
      opacity: "0",
      WebkitTransition: "opacity 0.35s, -webkit-transform 0.35s",
      transition: "opacity 0.35s, transform 0.35s",
      WebkitTransform: "scale(0,1)",
      transform: "scale(0,1)"
    },
    "&:hover": {
      color: "#222",
      textShadow: "0 O 2px #999999",
      "&:after": {
        opacity: "1",
        WebkitTransform: "scale(1)",
        transform: "scale(1)"
      }
    }
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
        <div>{props.id}</div>
        <div>{props.name}</div>
        <div>R$ {props.price}</div>
      </div>
    </LinkWrapper>
  );
}

export default ProductInfo;
