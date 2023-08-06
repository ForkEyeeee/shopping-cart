//handlers.js
import { rest } from "msw";

const itemsUrl = "https://fakestoreapi.com/products/category/electronics";

const itemsResponse = rest.get(itemsUrl, (req, res, ctx) => {
  return res(
    ctx.json([
      {
        image: "src/assets/mock-image.jpg",
      },
    ])
  );
});

const imageResponse = rest.get("src/assets/mock-image.jpg", (req, res, ctx) => {
  return res(ctx.status(200));
});

const itemErrorResponse = rest.get(itemsUrl, (req, res, ctx) => {
  return res(ctx.status(500));
});

export const handlers = [itemsResponse, imageResponse, itemErrorResponse];
