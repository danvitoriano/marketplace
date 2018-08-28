import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should display button", () => {
  const wrapper = shallow(<Button />);
  expect(wrapper.find("button").length).toBe(1);
});
