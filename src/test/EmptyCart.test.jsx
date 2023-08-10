import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmptyCart from "../components/EmptyCart";

describe("EmptyCart", () => {
  it("renders EmptyCart Component", () => {
    render(<EmptyCart />);
    expect(screen.getByText("Your cart is empty.")).toBeVisible();
    expect(
      screen.getByText("Looks like you haven't added any items yet.")
    ).toBeVisible();
  });
});
