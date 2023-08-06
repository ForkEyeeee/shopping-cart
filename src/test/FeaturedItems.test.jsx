import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeaturedItems from "../components/ItemList";
import { server } from "./mocks/server";
import { handlers } from "./mocks/handlers";

describe("FeaturedItems", () => {
  it("should call mock api", async () => {
    render(<FeaturedItems />);
    const image = await screen.findByRole("img");
    console.log(image);
    expect(image).toBeVisible();
    expect(image).toBeDefined();
    expect(image).toHaveAttribute("src", "src/assets/mock-image.jpg");
  });

  it("should produce an error if mock api call fails", async () => {
    server.use(handlers.itemErrorResponse);
    render(<FeaturedItems />);
    const featuredItemsTitle = await screen.findByText("Oops come back later");
    expect(featuredItemsTitle).toBeVisible();
  });

  it("renders FeaturedItems Component", async () => {
    render(<FeaturedItems />);
    const featuredItemsTitle = await screen.findByText("Featured Items");
    expect(featuredItemsTitle).toBeVisible();
  });
});
