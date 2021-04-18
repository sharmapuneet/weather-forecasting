import React from "react";
import { render, screen } from "@testing-library/react";
import TopContent from "./";

describe("Top Content", () => {
  it("renders TopContent component", () => {
    render(<TopContent />);

    expect(screen.getByText(/Melbourne/i)).toBeInTheDocument();
    expect(screen.getAllByTestId("test-cloudIcon")).toBeTruthy();
    expect(screen.getAllByTestId("test-sunIcon")).toBeTruthy();
    expect(screen.getByText(/32°/i)).toBeInTheDocument();
    expect(screen.getByText(/Tue 13th 3:46 PM/i)).toBeInTheDocument();
    expect(screen.getByText(/Humidity/i)).toBeInTheDocument();
    expect(screen.getByText(/Chance of rain/i)).toBeInTheDocument();
    expect(screen.getByText(/Wind/i)).toBeInTheDocument();
    expect(screen.getByText(/Tomorrow/i)).toBeInTheDocument();
    expect(screen.getByText(/78%/i)).toBeInTheDocument();
    expect(screen.getByText(/34%/i)).toBeInTheDocument();
    expect(screen.getByText(/21 kmh/i)).toBeInTheDocument();
    expect(screen.getByText(/30°/i)).toBeInTheDocument();
  });
});
