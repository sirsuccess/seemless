import React from "react";
import renderer from "react-test-renderer";

import Component from "./SearchComp";

it("renders correctly when called ", () => {
  const tree = renderer.create(<Component />).toJSON();
  expect(tree).toMatchSnapshot();
});
