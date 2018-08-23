import React from "react";
import { withRouter } from "react-router-dom";
import "./styles/card.css";
import ProductItem from "./ProductItem";

const api = "http://localhost:5000/api/products/";

class ProductListContainer extends React.Component {
  state = { data: [] };
  componentDidMount() {
    fetch(`${api + this.props.match.params.product_id}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    return <ProductItem data={this.state.data} buy />;
  }
}

export default withRouter(ProductListContainer);
