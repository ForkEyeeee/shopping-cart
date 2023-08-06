import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";
describe("Cart", () => {
  it("renders Cart Component", () => {
    render(<Cart />);
    const cartTitle = screen.getByText(`Shopping Cart`);
    expect(cartTitle).toBeInTheDocument();
  });

  it.skip("renders the images for the items added to the shopping cart", async () => {
    render(<Cart />);
    const image = await screen.findByRole("img");
    expect(image).toBeVisible();
    expect(image).toBeDefined();
    expect(image).toHaveAttribute("src", "src/assets/mock-image.jpg");
  });
});
