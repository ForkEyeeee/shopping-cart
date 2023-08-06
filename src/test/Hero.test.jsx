import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../components/Hero";

describe("Hero", () => {
  it("renders Hero Component", () => {
    render(<Hero />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "src/assets/hero-image.jpg");
    expect(img).toHaveAttribute("alt", "Fruit Stand in Hong Kong");
  });
});
