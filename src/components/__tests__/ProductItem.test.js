import React from "react";
import ReactDOM from "react-dom";
import ProductItem from "../ProductItem";
import { shallow, mount } from "enzyme";
import ProductInfo from "../ProductInfo";

const data = {
  photo: "https://placehold.it/300/B21DCF/ffffff?text=Refined Concrete Soap",
  name: "Refined Concrete Soap",
  id: 98715,
  product_id: 98715,
  price: "848.00"
};

it("renders without crashing buy", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ProductItem data={data} buy="buy" transaction={null} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div  buy", () => {
  const wrapper = shallow(
    <ProductItem data={data} buy="buy" transaction={null} />
  );
  expect(wrapper.find("div").length).toBe(2);
});

test("should display img  buy", () => {
  const wrapper = shallow(
    <ProductItem data={data} buy="buy" transaction={null} />
  );
  expect(wrapper.find("img").length).toBe(1);
});

test("should display ProductInfo  buy", () => {
  const wrapper = shallow(
    <ProductItem data={data} buy="buy" transaction={null} />
  );
  expect(wrapper.find(ProductInfo).length).toBe(1);
});

it("renders without crashingbuy with transaction", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ProductItem
      data={data}
      buy="buy"
      transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div buy with transaction", () => {
  const wrapper = shallow(
    <ProductItem
      data={data}
      buy="buy"
      transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
    />
  );
  expect(wrapper.find("div").length).toBe(2);
});

test("should display img buy with transaction", () => {
  const wrapper = shallow(
    <ProductItem
      data={data}
      buy="buy"
      transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
    />
  );
  expect(wrapper.find("img").length).toBe(1);
});

test("should display ProductInfo buy with transaction", () => {
  const wrapper = shallow(
    <ProductItem
      data={data}
      buy="buy"
      transaction={{ tid: data.tid, amount: data.amount, items: [data] }}
    />
  );
  expect(wrapper.find(ProductInfo).length).toBe(1);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProductItem data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div", () => {
  const wrapper = shallow(<ProductItem data={data} />);
  expect(wrapper.find("div").length).toBe(1);
});

test("should display a", () => {
  const wrapper = mount(<ProductItem data={data} />);
  expect(wrapper.find("a").length).toBe(1);
});

test("should display img", () => {
  const wrapper = shallow(<ProductItem data={data} />);
  expect(wrapper.find("img").length).toBe(1);
});

test("should display ProductInfo", () => {
  const wrapper = shallow(<ProductItem data={data} />);
  expect(wrapper.find(ProductInfo).length).toBe(1);
});
