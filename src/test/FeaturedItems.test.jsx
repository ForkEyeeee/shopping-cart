import {
  getByRole,
  getByText,
  waitFor,
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import FeaturedItems from "../components/FeaturedItems";
import { act } from "react-dom/test-utils";

describe("FeaturedItems", () => {
  it("renders FeaturedItems Component", async () => {
    render(<FeaturedItems />);
    const featuredItemsTitle = await screen.getByText("Featured Items");
    expect(featuredItemsTitle).toBeInTheDocument;
  });
  it("renders images in FeaturedItems Component", async () => {
    render(<FeaturedItems />);
    const images = await screen.findAllByRole("img");

    console.log(images);

    expect(images).toHaveLength(6);
    images.forEach((image) => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("alt");
    });
  });
});
