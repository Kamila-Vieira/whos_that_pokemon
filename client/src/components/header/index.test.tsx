import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Header from "./index";

test("should render a header", () => {
  render(<Header />, { wrapper: MemoryRouter });
  const header = screen.getByTestId("app-header");
  expect(header).toBeInTheDocument();
});

test("should render menu on header", () => {
  render(<Header />, { wrapper: MemoryRouter });
  const header = screen.getByTestId("app-header");
  const logo = screen.getByTestId("header-logo");
  const nav = screen.getByTestId("header-nav");
  const list = screen.getByTestId("header-list");
  const listItems = screen.getAllByTestId("header-list-item");

  expect(header).toContainElement(nav);
  expect(header).toContainElement(logo);
  expect(logo).toHaveTextContent(`Who's that Pokemon?`);
  expect(nav).toContainElement(list);
  expect(listItems).toHaveLength(2);

  listItems.forEach((listItem) => {
    expect(list).toContainElement(listItem);
  });
});
