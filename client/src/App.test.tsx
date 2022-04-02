import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("should render a div App", () => {
  render(<App />, { wrapper: MemoryRouter });
  const divApp = screen.getByTestId("app-container");
  const header = screen.getByTestId("app-header");
  expect(divApp).toBeInTheDocument();
  expect(divApp).toContainElement(header);
  //expect(divApp).not.toBeEmptyDOMElement();
});
