import React from "react";
import ReactDOM from "react-dom";
import TransactionInfo from "../TransactionInfo";
import { shallow } from "enzyme";
it("renders without crashing buy", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TransactionInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div", () => {
  const wrapper = shallow(<TransactionInfo />);
  expect(wrapper.find("div").length).toBe(1);
});

test("should display strong", () => {
  const wrapper = shallow(<TransactionInfo />);
  expect(wrapper.find("strong").length).toBe(1);
});
