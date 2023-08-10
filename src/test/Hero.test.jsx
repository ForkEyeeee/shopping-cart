import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../components/Hero";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

describe("Hero", () => {
  it("renders Hero Component", () => {
    render(
      <ChakraProvider>
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      </ChakraProvider>
    );

    expect(screen.getByText("50% off your first purchase")).toBeVisible();
    expect(screen.getByText("Buy it all here")).toBeVisible();
  });
});
