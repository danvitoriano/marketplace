import React from "react";
import ReactDOM from "react-dom";
import Transaction from "../Transaction";
import { shallow, mount } from "enzyme";
import TransactionInfo from "../TransactionInfo";
const data = {
  title: "Refined Concrete Soap",
  amount: "84800",
  tid: 4198520
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
  expect(wrapper.find("div").length).toBe(5);
});

test("should display TransactionInfo", () => {
  const wrapper = mount(
    <Transaction
      transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
    />
  );
  expect(wrapper.find(TransactionInfo).length).toBe(9);
});
