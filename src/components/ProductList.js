import React from "react";
import { withRouter } from "react-router-dom";
import ProductItem from "./ProductItem";

class ProductListContainer extends React.Component {
  state = { data: [] };
  componentDidMount() {
    fetch("http://localhost:5000/api/products")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    return <ProductList data={this.state.data} />;
  }
}

var ProductList = props => (
  <div className="row">
    {props.data.map(c => (
      <ProductItem key={c.product_id} data={c} />
    ))}
  </div>
);

export default withRouter(ProductListContainer);
