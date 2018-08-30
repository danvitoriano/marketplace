import React from "react";
import ReactDOM from "react-dom";
import ModalContainer from "../ModalContainer";
import { shallow, mount } from "enzyme";
import Transaction from "../Transaction";
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
    <ModalContainer
      render={
        <Transaction
          transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
          show={{ tid: data.tid, amount: data.amount, items: [data] }}
        />
      }
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div", () => {
  const wrapper = shallow(
    <ModalContainer
      render={
        <Transaction
          transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
          show={{ tid: data.tid, amount: data.amount, items: [data] }}
        />
      }
    />
  );
  expect(wrapper.find("div").length).toBe(2);
});

test("should display TransactionInfo", () => {
  const wrapper = mount(
    <ModalContainer
      render={
        <Transaction
          transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
          show={{ tid: data.tid, amount: data.amount, items: [data] }}
        />
      }
    />
  );
  expect(wrapper.find(Transaction).length).toBe(1);
});
