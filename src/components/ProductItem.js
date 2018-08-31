import React from "react";
import ProductInfo from "./ProductInfo";
import ModalContainer from "./ModalContainer";
import Button from "./Button";
import Transaction from "./Transaction";
import Loading from "./Loading";
import { css } from "glamor";

const styles = {
  card: css({
    display: "grid",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: 16,
    backgroundColor: "whitesmoke",
    maxWidth: 300,
    "> img": {
      width: "100%"
    }
  }),
  detail: css({
    display: "grid",
    gridTemplateColumns: "auto",
    padding: 16,
    backgroundColor: "white",
    maxWidth: 300,
    margin: "0 auto",
    "@media(min-width: 570px)": {
      gridTemplateColumns: "350px auto",
      maxWidth: 1024,
      margin: "0 auto"
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
      borderBottom: "2px solid",
      opacity: "0",
      WebkitTransition: "opacity 0.35s, -webkit-transform 0.35s",
      transition: "opacity 0.35s, transform 0.35s",
      WebkitTransform: "scale(0,1)",
      transform: "scale(0,1)"
    },
    "&:hover": {
      color: "black",
      textShadow: "0 0 2px gainsboro",
      "&:after": {
        opacity: "1",
        WebkitTransform: "scale(1)",
        transform: "scale(1)"
      }
    }
  })
};

function ProductItem(props) {
  switch (props.buy) {
    case "buy":
      return (
        <div data-cy="detail" {...styles.detail}>
          <img src={props.data.photo} alt={props.data.name} />
          <div>
            <ProductInfo
              name={props.data.name}
              id={props.data.product_id}
              price={props.data.price}
              buy={props.buy}
            />
            <Button
              onClick={props.onClick}
              label="Comprar"
              dataCy="buy-button"
            />
            {props.loadingTransaction === true ? (
              <Loading small />
            ) : props.transaction !== null ? (
              <ModalContainer
                show={props.transaction}
                render={
                  <Transaction
                    transaction={props.transaction}
                    payables={props.payables}
                  />
                }
              />
            ) : null}
          </div>
        </div>
      );
    default:
      return (
        <a
          href={"/" + props.data.product_id}
          data-cy={props.data.product_id}
          {...styles.link}
        >
          <div data-cy="card" {...styles.card}>
            <img src={props.data.photo} alt={props.data.name} />
            <ProductInfo
              name={props.data.name}
              id={props.data.product_id}
              price={props.data.price}
              buy={props.buy}
            />
          </div>
        </a>
      );
  }
}

export default ProductItem;
