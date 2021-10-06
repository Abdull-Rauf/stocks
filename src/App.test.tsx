import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("render header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Stocks & Forex/i);
  expect(linkElement).toBeInTheDocument();
});
