import React from "react";
import { withRouter } from "react-router-dom";
import ProductItem from "./ProductItem";
import Header from "./Header";
import Loading from "./Loading";
import pagarme from "pagarme";
import Error from "./Error";

const api_key_pagarme = "ak_test_N00fKHmWDAywhJOykmjKx52XvSgvCE";
const api = "https://marketplace-api-server.herokuapp.com/api/products/";

class ProductListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.Recipients = this.Recipients.bind(this);
    this.Transaction = this.Transaction.bind(this);
    this.Payables = this.Payables.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.state = {
      data: [],
      response: "",
      bankAccount: "",
      payables: [],
      seller: "",
      me: "",
      friend: "",
      loading: true,
      loadingTransaction: true,
      error: ""
    };
  }

  Recipients() {
    pagarme.client // seller
      .connect({ api_key: api_key_pagarme })
      .then(client =>
        client.recipients.create({
          transfer_enabled: false,
          transfer_interval: "weekly",
          transfer_day: 5,
          automatic_anticipation_enabled: true,
          anticipatable_volume_percentage: 60,
          bank_account: {
            bank_code: "341",
            agencia: "0932",
            agencia_dv: "5",
            conta: "58054",
            type: "conta_corrente",
            conta_dv: "1",
            document_number: "26268738888",
            legal_name: "Old Stuff (Seller)"
          }
        })
      )
      .then(recipients => this.setState({ seller: recipients.id }));
    pagarme.client // me
      .connect({ api_key: api_key_pagarme })
      .then(client =>
        client.recipients.create({
          transfer_enabled: false,
          transfer_interval: "weekly",
          transfer_day: 5,
          automatic_anticipation_enabled: true,
          anticipatable_volume_percentage: 25,
          bank_account: {
            bank_code: "341",
            agencia: "0932",
            agencia_dv: "5",
            conta: "58054",
            type: "conta_corrente",
            conta_dv: "1",
            document_number: "26268738888",
            legal_name: "Developer Number One"
          }
        })
      )
      .then(recipients => this.setState({ me: recipients.id }));
    pagarme.client // friend
      .connect({ api_key: api_key_pagarme })
      .then(client =>
        client.recipients.create({
          transfer_enabled: false,
          transfer_interval: "weekly",
          transfer_day: 5,
          automatic_anticipation_enabled: true,
          anticipatable_volume_percentage: 15,
          bank_account: {
            bank_code: "341",
            agencia: "0932",
            agencia_dv: "5",
            conta: "58054",
            type: "conta_corrente",
            conta_dv: "1",
            document_number: "26268738888",
            legal_name: "Developer Friendship"
          }
        })
      )
      .then(recipients => this.setState({ friend: recipients.id }));
  }

  Transaction() {
    this.setState({ loadingTransaction: true });
    pagarme.client // transaction with split_rule
      .connect({ api_key: api_key_pagarme })
      .then(client =>
        client.transactions.create({
          amount: parseInt(this.state.data.price * 100, 10),
          card_number: "4111111111111111",
          card_holder_name: "Morpheus Fishburne",
          card_expiration_date: "0922",
          card_cvv: "123",
          customer: {
            external_id: "#123456789",
            name: "João das Neves",
            type: "individual",
            country: "br",
            email: "joaoneves@norte.com",
            documents: [
              {
                type: "cpf",
                number: "66666666666"
              }
            ],
            phone_numbers: ["+5511999999999", "+5511888888888"],
            birthday: "1985-01-01"
          },
          billing: {
            name: "João das Neves",
            address: {
              country: "br",
              state: "SP",
              city: "São Paulo",
              neighborhood: "Vila Carrao",
              street: "Rua Lobo",
              street_number: "999",
              zipcode: "03424030"
            }
          },
          shipping: {
            name: "João das Neves",
            fee: 1000,
            delivery_date: "2017-12-25",
            expedited: true,
            address: {
              country: "br",
              state: "SP",
              city: "São Paulo",
              neighborhood: "Vila Carrao",
              street: "Rua Lobo",
              street_number: "999",
              zipcode: "03424030"
            }
          },
          split_rules: [
            {
              recipient_id: this.state.seller,
              percentage: 60,
              liable: true,
              charge_processing_fee: true
            },
            {
              recipient_id: this.state.me,
              percentage: 25,
              liable: true,
              charge_processing_fee: true
            },
            {
              recipient_id: this.state.friend,
              percentage: 15,
              liable: true,
              charge_processing_fee: true
            }
          ],
          items: [
            {
              id: this.state.data.product_id.toString(),
              title: this.state.data.name,
              unit_price: parseInt(this.state.data.price, 10),
              quantity: 1,
              tangible: true
            }
          ]
        })
      )
      .then(response =>
        this.setState({ response: response, loadingTransaction: false })
      )
      .then(this.Payables);
  }

  Payables() {
    var tid = this.state.response.tid;
    pagarme.client // paybables transaction return object
      .connect({ api_key: api_key_pagarme })
      .then(client => client.payables.find({ transactionId: tid }))
      .then(payables => this.setState({ payables: payables }));
  }

  handleErrors(response) {
    if (!response.ok) {
      this.setState({
        loading: false,
        error: response.status + " - " + response.statusText
      });
    }
    return response;
  }

  componentDidMount() {
    this.Recipients();
    fetch(`${api + this.props.match.params.product_id}`)
      .then(this.handleErrors)
      .then(response => response.json())
      .then(data => this.setState({ data: data, loading: false }))
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.response !== "" && this.state.payables !== []) {
      return (
        <div>
          <Header backButton />
          <ProductItem
            data={this.state.data}
            buy="buy"
            onClick={this.Transaction}
            transaction={this.state.response}
            loadingTransaction={this.state.loadingTransaction}
            payables={this.state.payables}
          />
        </div>
      );
    } else if (this.state.loading === true) {
      return <Loading />;
    } else if (this.state.error) {
      return <Error status={this.state.error} />;
    } else {
      return (
        <div>
          <Header backButton />
          <ProductItem
            data={this.state.data}
            buy="buy"
            onClick={this.Transaction}
            transaction={null}
          />
        </div>
      );
    }
  }
}

export default withRouter(ProductListContainer);
