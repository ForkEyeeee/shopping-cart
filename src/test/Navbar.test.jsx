import { getByRole, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../components/NavBar";

describe("Navbar", () => {
  it("renders Navbar Component", () => {
    render(<Navbar />);
    const home = screen.getByText("Home");
    const shoppingCart = screen.getByText("Cart");
    const aboutUs = screen.getByText("About Us");
    expect(home).toBeInTheDocument();
    expect(shoppingCart).toBeInTheDocument();
    expect(aboutUs).toBeInTheDocument();
  });

  it();
});
