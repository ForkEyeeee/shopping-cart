import { findByText, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import useContext from "../hooks/useContext";
import { error } from "console";
import { server } from "./mocks/server";
const console = require("console");

describe("Cart", () => {
  it("renders Cart Component", () => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );
    expect(screen.getByText("Shopping Cart")).toBeVisible();
  });

  it.skip("renders the images for the items added to the shopping cart", async () => {
    render(<Cart />);
    const image = await screen.findByRole("img");
    expect(image).toBeVisible();
    expect(image).toBeDefined();
    expect(image).toHaveAttribute("src", "src/assets/mock-image.jpg");
  });
});
