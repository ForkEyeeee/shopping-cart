import { getByRole, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeaturedItems from "../components/FeaturedItems";

describe("Hero", () => {
  it("renders Hero Component", () => {
    render(<FeaturedItems />);
    const featuredItemsTitle = screen.getByText("Featured Items");
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(5);
    images.forEach((image) => {
      expect(image).toHaveAttribute("alt");
    });
  });
});
