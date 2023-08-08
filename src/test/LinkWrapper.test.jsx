import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import LinkWrapper from "../components/LinkWrapper";
import { FaHome, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

describe("LinkWrapper", () => {
  it("renders LinkWrapper Component", async () => {
    render(
      <ChakraProvider>
        <BrowserRouter>
          <LinkWrapper to="/" icon={FaHome} label="Home" />
          <LinkWrapper to="/Cart" icon={FaShoppingCart} label="Cart" />
          <LinkWrapper to="/AboutUs" icon={FaInfoCircle} label="About" />{" "}
        </BrowserRouter>
      </ChakraProvider>
    );

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: "Cart" })).toHaveAttribute(
      "href",
      "/Cart"
    );
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/AboutUs"
    );
  });
});
