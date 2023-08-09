import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";

describe("Cart", () => {
  it("renders Cart Component", () => {
    render(<Cart />);
    expect(screen.getByText("Shopping Cart")).toBeVisible();
  });
});
