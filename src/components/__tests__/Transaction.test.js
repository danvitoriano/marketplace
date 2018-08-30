import React from "react";
import ReactDOM from "react-dom";
import Transaction from "../Transaction";
import { shallow, mount } from "enzyme";
import TransactionInfo from "../TransactionInfo";
const data = {
  photo: "http://placeimg.com/300/300/tech?t=0.9092886565889047",
  name: "Refined Concrete Soap",
  title: "Refined Concrete Soap",
  id: 98715,
  product_id: 98715,
  price: "848.00",
  amount: "84800",
  tid: 4198520,
  label: "Transaction ID"
};

it("renders without crashing buy", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Transaction
      transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div", () => {
  const wrapper = shallow(
    <Transaction
      transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
    />
  );
  expect(wrapper.find("div").length).toBe(1);
});

test("should display TransactionInfo", () => {
  const wrapper = mount(
    <Transaction
      transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
    />
  );
  expect(wrapper.find(TransactionInfo).length).toBe(6);
});
