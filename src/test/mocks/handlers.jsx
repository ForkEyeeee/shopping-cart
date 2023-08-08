//handlers.js
import { rest } from "msw";

const itemsResponse = rest.get(
  "https://fakestoreapi.com/products/category/electronics",
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "Electronic Product 1",
          price: 299.99,
          description: "Description for Electronic Product 1",
          image: "src/assets/mock-image.jpg",
        },
        {
          id: 2,
          title: "Electronic Product 2",
          price: 399.99,
          description: "Description for Electronic Product 2",
          image: "src/assets/mock-image.jpg",
        },
        {
          id: 3,
          title: "Electronic Product 3",
          price: 499.99,
          description: "Description for Electronic Product 3",
          image: "src/assets/mock-image.jpg",
        },
        {
          id: 4,
          title: "Electronic Product 4",
          price: 599.99,
          description: "Description for Electronic Product 4",
          image: "src/assets/mock-image.jpg",
        },
        {
          id: 5,
          title: "Electronic Product 5",
          price: 699.99,
          description: "Description for Electronic Product 5",
          image: "src/assets/mock-image.jpg",
        },
        {
          id: 6,
          title: "Electronic Product 6",
          price: 799.99,
          description: "Description for Electronic Product 6",
          image: "src/assets/mock-image.jpg",
        },
      ])
    );
  }
);

const imageResponse = rest.get("src/assets/mock-image.jpg", (req, res, ctx) => {
  return res(ctx.status(200));
});

const itemErrorResponse = rest.get(
  "https://fakestoreapi.com/products/category/electronics",
  (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ message: "Oops come back later" }));
  }
);

export const handlers = [itemsResponse, imageResponse, itemErrorResponse];
