import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import LinkWrapper from "../components/LinkWrapper";
import { FaHome, FaShoppingCart } from "react-icons/fa";

describe("LinkWrapper", () => {
  it("renders LinkWrapper Component", async () => {
    render(
      <ChakraProvider>
        <BrowserRouter>
          <LinkWrapper to="/" icon={FaHome} label="Home" />
          <LinkWrapper to="/Cart" icon={FaShoppingCart} label="Cart" />
        </BrowserRouter>
      </ChakraProvider>
    );

    const homeLinks = screen.getAllByRole("link", { name: "Home" });
    homeLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/");
    });

    const cartLinks = screen.getAllByRole("link", { name: "Cart" });
    cartLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/Cart");
    });
  });
});
