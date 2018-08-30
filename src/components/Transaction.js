import React from "react";
import TransactionInfo from "./TransactionInfo";

function Transaction(props) {
  return (
    <div data-cy="transaction">
      <TransactionInfo label="Transaction ID" value={props.transaction.tid} />
      <TransactionInfo label="Item" value={props.transaction.items[0].title} />
      <TransactionInfo
        label="Total Transação"
        value={(props.transaction.amount * 0.01).toFixed(2)}
      />
      <TransactionInfo
        label="Vendedor (60%)"
        value={(props.transaction.amount * 0.006).toFixed(2)}
      />
      <TransactionInfo
        label="Eu (25%)"
        value={(props.transaction.amount * 0.0025).toFixed(2)}
      />
      <TransactionInfo
        label="Amigo (15%)"
        value={(props.transaction.amount * 0.0015).toFixed(2)}
      />
    </div>
  );
}
export default Transaction;
