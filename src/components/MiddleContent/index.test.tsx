import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MiddleContent from "./";

describe("Middle Content", () => {
  it("renders MiddleContent component", () => {
    render(<MiddleContent />);

    expect(screen.getByText("DELAYED ROUTES")).toBeInTheDocument();
    expect(screen.getAllByTestId("test-dotIcon")).toBeTruthy();
    expect(screen.getAllByTestId("test-arrowIcon")).toBeTruthy();
    expect(screen.getAllByText("Monash Fwy Out")).toBeTruthy();
    expect(screen.getAllByText("Eastlink")).toBeTruthy();
    expect(screen.getAllByText("Kings way")).toBeTruthy();
    expect(screen.getAllByText("13km")).toBeTruthy();
    expect(screen.getAllByText("45")).toBeTruthy();
  });

  it("content should not be visible on closing accordion", async () => {
    const { getByRole, queryByText } = render(<MiddleContent />);

    expect(queryByText("Western Ring Rd")).toBeVisible();

    fireEvent.click(getByRole("button"));
    await waitFor(() => expect(queryByText("Western Ring Rd")).not.toBeVisible());
  });
});
