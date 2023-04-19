import React from "react";
import renderer from "react-test-renderer";
import {render} from "@testing-library/react"
import { Poke } from "./Poke";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ name: "Bulbasaur" }, { name: "Venasaur" }]),
  })
);

it("matches the snapshot", () => {
  const element = renderer.create(<Poke />);
  let tree = element.toJSON();
  expect(tree).toMatchSnapshot();
});

it("fetches data", () => {
  const element = renderer.create(<Poke />);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it("lists pokemon", () => {
  const {container} = render(<Poke />);
  
  expect(container.getById("poke")).toBe("Bulbasaur");
});
