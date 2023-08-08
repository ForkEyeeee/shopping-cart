import { render, screen, findByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders NavBar Component", async () => {
    render(
      <ChakraProvider>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </ChakraProvider>
    );
    const home = screen.getByText("Home");
    const shoppingCart = screen.getByText("Cart");
    const aboutUs = screen.getByText("About");
    expect(home).toBeVisible();
    expect(shoppingCart).toBeVisible();
    expect(aboutUs).toBeVisible();
  });
});
