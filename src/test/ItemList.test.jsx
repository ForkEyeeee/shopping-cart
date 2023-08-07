import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemList from "../components/ItemList";
import { server } from "./mocks/server";
import { handlers } from "./mocks/handlers";

describe("ListItems", () => {
  it("should call mock api", async () => {
    render(<ItemList />);
    const image = await screen.findByRole("img");
    expect(image).toBeVisible();
    expect(image).toBeDefined();
    expect(image).toHaveAttribute("src", "src/assets/mock-image.jpg");
  });

  it("should produce an error if mock api call fails", async () => {
    server.use(handlers.itemErrorResponse);
    render(<ItemList />);
    const featuredItemsTitle = await screen.findByText(
      "Failed to fetch Oops come back later"
    );
    expect(featuredItemsTitle).toBeVisible();
  });

  it("renders ItemsList Component", async () => {
    render(<ItemList />);
    const featuredItemsTitle = await screen.findByText("Today's Stock");
    expect(featuredItemsTitle).toBeVisible();
  });
});
