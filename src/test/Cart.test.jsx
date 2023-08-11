import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

describe("Cart", () => {
  it("renders Cart Component", () => {
    render(
      <ChakraProvider>
        <BrowserRouter>
          <Cart
            data={[]}
            loading={false}
            error={false}
            cartItems={[]}
            handleAddCart={() => {}}
            handleClearItems={() => {}}
            handleCheckout={() => {}}
          />
        </BrowserRouter>
      </ChakraProvider>
    );
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });
});
