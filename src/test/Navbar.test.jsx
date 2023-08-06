import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Navbar from "../components/NavBar";

describe("Navbar", () => {
  it("renders Navbar Component", async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    const home = screen.getByText("Home");
    const shoppingCart = screen.getByText("Cart");
    const aboutUs = screen.getByText("About Us");
    expect(home).toBeVisible();
    expect(shoppingCart).toBeVisible();
    expect(aboutUs).toBeVisible();
  });
});
