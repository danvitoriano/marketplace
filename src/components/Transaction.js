import React from "react";
import TransactionInfo from "./TransactionInfo";
import Link from "./Link";
import { css } from "glamor";

const styles = {
  container: css({
    fontFamily: "Raleway",
    margin: 10,
    "> strong": {
      fontWeight: 300,
      fontSize: 18
    }
  })
};

function Transaction(props) {
  return (
    <div className="column transaction">
      <div className="card">
        {console.log(props.transaction)}
        <TransactionInfo label="Transaction ID" value={props.transaction.tid} />
        <TransactionInfo
          label="Item"
          value={props.transaction.items[0].title}
        />
        <TransactionInfo
          label="Total Transação"
          value={(props.transaction.amount * 0.01).toFixed(2)}
        />
        <TransactionInfo
          label="Vendedor"
          value={(props.transaction.amount * 0.006).toFixed(2)}
        />
        <TransactionInfo
          label="Eu"
          value={(props.transaction.amount * 0.0025).toFixed(2)}
        />
        <TransactionInfo
          label="Amigo"
          value={(props.transaction.amount * 0.0015).toFixed(2)}
        />
        <Link href="/" label="Voltar para Lista de Produtos" />
      </div>
    </div>
  );
}
export default Transaction;
