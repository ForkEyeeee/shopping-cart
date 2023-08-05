import { getByRole, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Homepage from "../components/Homepage";

describe("Homepage", () => {
  it("renders Homepage Component", () => {
    render(<Homepage />);
    const homeElement = screen.getByText("Shopping Cart");
    expect(homeElement).toBeInTheDocument();
  });

  it();
});
