import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { rest } from "msw";
import { setupServer } from "msw/node";
import FeaturedItems from "../components/FeaturedItems";

const itemsUrl = "https://fakestoreapi.com/products/category/electronics";

const itemsResponse = rest.get(itemsUrl, (req, res, ctx) => {
  return res(
    ctx.json([
      {
        id: 1,
        title: "Guitar",
        price: "33",
        category: "Electronic",
        description: "Great Item",
        image: "src/to/image",
      },
    ])
  );
});

const itemErrorResponse = rest.get(itemsUrl, (req, res, ctx) => {
  console.log("Sending error response");
  return res(ctx.status(500), ctx.json({ message: "Internal Server Error" }));
});

const handlers = [itemsResponse];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("FeaturedItems", () => {
  it("renders FeaturedItems Component", async () => {
    render(<FeaturedItems />);
    const featuredItemsTitle = await screen.findByText("Featured Items");
    expect(featuredItemsTitle).toBeVisible();
  });

  it("renders FeaturedItems Component", async () => {
    server.use(itemErrorResponse);
    render(<FeaturedItems />);
    const featuredItemsTitle = await screen.findByText("Oops come back later");
    expect(featuredItemsTitle).toBeVisible();
  });

  it("renders images in FeaturedItems Component", () => {
    server.close();
    render(<FeaturedItems />);
    waitFor(async () => {
      const images = await screen.findAllByRole("img");
      expect(images).toBeDefined();
      expect(images).toBeVisible();
      expect(images).toHaveAttribute("alt");
    });
  });
});
