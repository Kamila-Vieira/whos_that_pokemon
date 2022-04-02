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
  const listLinks = screen.getAllByTestId("header-list-link");

  expect(header).toContainElement(nav);
  expect(header).toContainElement(logo);
  expect(logo).toHaveTextContent(`Who's that Pokemon?`);
  expect(nav).toContainElement(list);
  expect(listLinks).toHaveLength(2);

  listLinks.forEach((listLink) => {
    expect(list).toContainElement(listLink);
    expect(listLink).toHaveAttribute("href");
    expect(listLink).toHaveAttribute("title");
  });
});
