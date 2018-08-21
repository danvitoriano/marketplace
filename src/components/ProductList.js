import React from "react";
import { withRouter } from "react-router-dom";
import "./styles/card.css";

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
      <div className="column">
        <div className="card">
          <img src={c.photo} alt={c.name} />
          <div className="container">
            <h4>
              {c.product_id} — <b>{c.name}</b>
            </h4>
            <p>{c.price}</p>
            <a href={"/products/" + c.product_id}>Ver Detalhes</a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default withRouter(ProductListContainer);
