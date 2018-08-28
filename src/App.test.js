import React from "react";
import { Switch, Route } from "react-router";
import createRouterContext from "react-router-test-context";
import { shallow } from "enzyme";
import ProductList from "./components/ProductList";
import ProductListItem from "./components/ProductListItem";

describe("Route App", () => {
  it("renders root", () => {
    const context = createRouterContext({ location: { pathname: "/" } });
    const wrapper = shallow(
      <Switch>
        <Route path="/17662" component={ProductListItem} />
        <Route path="/" component={ProductList} />
      </Switch>,
      { context }
    );
    const props = wrapper.props();
    expect(props.path).toBe("/");
  });
  it("renders /:product_id", () => {
    const context = createRouterContext({ location: { pathname: "/17662" } });
    const wrapper = shallow(
      <Switch>
        <Route path="/17662" component={ProductListItem} />
        <Route path="/" component={ProductList} />
      </Switch>,
      { context }
    );
    const props = wrapper.props();
    expect(props.path).toBe("/17662");
  });
});
