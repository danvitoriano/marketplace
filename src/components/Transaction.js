import React from "react";
import TransactionInfo from "./TransactionInfo";

const inlines = {
  display: "inline-block",
  marginRight: 20
};
const marginRight = {
  marginRight: 20
};

function Transaction(props) {
  var payables = props.payables;
  return (
    <div data-cy="transaction">
      <div style={marginRight}>
        <TransactionInfo label="Transaction ID" value={props.transaction.tid} />
      </div>
      <div style={inlines}>
        <TransactionInfo
          label="Item"
          value={props.transaction.items[0].title}
        />
        <TransactionInfo label="status" value={props.transaction.status} />
        <TransactionInfo
          label="acquirer_name"
          value={props.transaction.acquirer_name}
        />
        <TransactionInfo
          label="authorization_code"
          value={props.transaction.authorization_code}
        />
      </div>
      <div style={inlines}>
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
      <div style={marginRight}>
        {props.payables
          ? payables.map(item => (
              <TransactionInfo
                key={item.id}
                label={`${"Payables " + item.id}`}
                value={`${"Status: " +
                  item.status +
                  " | Amount: " +
                  item.amount +
                  " | Fee: " +
                  item.fee}`}
              />
            ))
          : null}
      </div>
    </div>
  );
}
export default Transaction;
