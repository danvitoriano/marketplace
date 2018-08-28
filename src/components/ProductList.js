import React from "react";
import { withRouter } from "react-router-dom";
import ProductItem from "./ProductItem";
import Header from "./Header";
import { css } from "glamor";

const styles = {
  container: css({
    display: "grid",
    padding: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gridGap: "1rem"
  })
};

class ProductListContainer extends React.Component {
  state = { data: [] };
  componentDidMount() {
    fetch("https://marketplace-api-server.herokuapp.com/api/products")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    return (
      <div>
        <Header />
        <ProductList data={this.state.data} />
      </div>
    );
  }
}

var ProductList = props => (
  <div className="row" {...styles.container}>
    {props.data.map(c => (
      <ProductItem key={c.product_id} data={c} />
    ))}
  </div>
);

export default withRouter(ProductListContainer);
