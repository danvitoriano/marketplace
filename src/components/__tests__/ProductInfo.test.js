import React from "react";
import ReactDOM from "react-dom";
import ProductInfo from "../ProductInfo";
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProductInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div", () => {
  const wrapper = shallow(<ProductInfo />);
  expect(wrapper.find("div").length).toBe(4);
});

test("should display a", () => {
  const wrapper = mount(<ProductInfo />);
  expect(wrapper.find("a").length).toBe(1);
});

test("should NOT display a with props buy", () => {
  const wrapper = mount(<ProductInfo buy />);
  expect(wrapper.find("a").length).toBe(0);
});
