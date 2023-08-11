import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/Navbar";

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
    expect(home).toBeVisible();
    expect(shoppingCart).toBeVisible();
  });
});
