import React from "react";
import { withRouter } from "react-router-dom";
import ProductItem from "./ProductItem";
import Button from "./Button";
import pagarme from "pagarme";

const api_key_pagarme = "ak_test_N00fKHmWDAywhJOykmjKx52XvSgvCE";
const api = "http://localhost:5000/api/products/";

var bankAccountID = "";

class ProductListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.Transaction = this.Transaction.bind(this);
    this.BankAccount = this.BankAccount.bind(this);
    this.Recipients = this.Recipients.bind(this);
    this.state = { data: [], response: "", bankAccount: "" };
  }

  BankAccount() {
    pagarme.client
      .connect({ api_key: api_key_pagarme })
      .then(client =>
        client.bankAccounts.create({
          bank_code: "237",
          agencia: "1935",
          agencia_dv: "9",
          conta: "23398",
          conta_dv: "9",
          legal_name: "API BANK ACCOUNT",
          document_number: "26268738888"
        })
      )
      .then(bankAccount => console.log("bankAccount", bankAccount.id))
      .then(bankAccount => this.setState({ bankAccount }))
      .then(function(data) {
        bankAccountID = data;
        return bankAccountID;
      });
  }

  Recipients() {
    pagarme.client
      .connect({ api_key: api_key_pagarme })
      .then(client =>
        client.recipients.create({
          transfer_enabled: false,
          transfer_interval: "weekly",
          transfer_day: 5,
          automatic_anticipation_enabled: true,
          anticipatable_volume_percentage: 85,
          bank_account: {
            bank_code: "341",
            agencia: "0932",
            agencia_dv: "5",
            conta: "58054",
            type: "conta_corrente",
            conta_dv: "1",
            document_number: "26268738888",
            legal_name: "API BANK ACCOUNT"
          }
        })
      )
      .then(recipients => console.log("recipients 1: ", recipients.id));
    pagarme.client
      .connect({ api_key: api_key_pagarme })
      .then(client =>
        client.recipients.create({
          transfer_enabled: false,
          transfer_interval: "weekly",
          transfer_day: 5,
          automatic_anticipation_enabled: true,
          anticipatable_volume_percentage: 85,
          bank_account: {
            bank_code: "341",
            agencia: "0932",
            agencia_dv: "5",
            conta: "58054",
            type: "conta_corrente",
            conta_dv: "1",
            document_number: "26268738888",
            legal_name: "API BANK ACCOUNT"
          }
        })
      )
      .then(recipients => console.log("recipients 2: ", recipients.id));
    pagarme.client
      .connect({ api_key: api_key_pagarme })
      .then(client =>
        client.recipients.create({
          transfer_enabled: false,
          transfer_interval: "weekly",
          transfer_day: 5,
          automatic_anticipation_enabled: true,
          anticipatable_volume_percentage: 85,
          bank_account: {
            bank_code: "341",
            agencia: "0932",
            agencia_dv: "5",
            conta: "58054",
            type: "conta_corrente",
            conta_dv: "1",
            document_number: "26268738888",
            legal_name: "API BANK ACCOUNT"
          }
        })
      )
      .then(recipients => console.log("recipients 3: ", recipients.id));
  }

  Transaction() {
    pagarme.client
      .connect({ api_key: api_key_pagarme })
      .then(client =>
        client.transactions.create({
          amount: 1000,
          card_number: "4610464128243302",
          card_holder_name: "abc",
          card_expiration_date: "1120",
          card_cvv: "373",
          customer: {
            external_id: "#123456789",
            name: "João das Neves",
            type: "individual",
            country: "br",
            email: "joaoneves@norte.com",
            documents: [
              {
                type: "cpf",
                number: "00000000000"
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
      .then(response => this.setState({ response: response }));
  }

  componentDidMount() {
    this.BankAccount();
    this.Recipients();
    fetch(`${api + this.props.match.params.product_id}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div>
        <ProductItem data={this.state.data} buy />
        {console.log(typeof this.state.response, this.state.response)}
        {this.state.response !== "" ? (
          <div className="column transaction">
            <p>
              <strong>Transaction ID: </strong>
              {this.state.response.tid}
            </p>
            <p>
              <strong>Item: </strong>
              {this.state.response.items[0].title}
            </p>
            <a href="/">Voltar para Lista de Produtos</a>
          </div>
        ) : (
          <Button onClick={this.Transaction} label="Comprar" />
        )}
      </div>
    );
  }
}

export default withRouter(ProductListContainer);
