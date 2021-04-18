import React from "react";
import { render, screen } from "@testing-library/react";
import MiddleContent from "./";

test("renders learn react link", () => {
  render(<MiddleContent />);

  expect(screen.getByText("DELAYED ROUTES")).toBeTruthy();
  expect(screen.getAllByTestId("test-dotIcon")).toBeTruthy();
  expect(screen.getAllByTestId("test-arrowIcon")).toBeTruthy();
  expect(screen.getAllByText("Monash Fwy Out")).toBeTruthy();
  expect(screen.getAllByText("Eastlink")).toBeTruthy();
  expect(screen.getAllByText("Kings way")).toBeTruthy();
  expect(screen.getAllByText("13km")).toBeTruthy();
  expect(screen.getAllByText("45")).toBeTruthy();
});
