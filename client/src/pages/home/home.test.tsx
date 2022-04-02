import { render, screen } from "@testing-library/react";
import Home from "./index";

test("should render a home page", () => {
  render(<Home />);
  const home = screen.getByTestId("app-home");
  expect(home).toBeInTheDocument();
});
