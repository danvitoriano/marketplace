import React from "react";
function TransactionInfo(props) {
  return (
    <div>
      <strong>{props.label}: </strong>
      {props.value}
    </div>
  );
}
export default TransactionInfo;
