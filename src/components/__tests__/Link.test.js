import React from "react";
import ReactDOM from "react-dom";
import Link from "../Link";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Link />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should display a", () => {
  const wrapper = shallow(<Link />);
  expect(wrapper.find("a").length).toBe(1);
});
