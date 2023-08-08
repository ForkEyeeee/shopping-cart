import {
  findByRole,
  getByRole,
  render,
  findAllByRole,
  screen,
  findByText,
} from "@testing-library/react";

import "@testing-library/jest-dom";
import ItemList from "../components/ItemList";
import { server } from "./mocks/server";
import { handlers } from "./mocks/handlers";
import useDataFetching from "../hooks/fetchItemData";
import { rest } from "msw";
import App from "../App";
import { renderHook, waitFor } from "@testing-library/react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 500,
    json: () => Promise.resolve({ error: "Internal server error" }),
  })
);

afterEach(() => {
  jest.clearAllMocks();
});

describe("useDataFetching Hook", () => {
  it.skip("fetches electronic products and matches the snapshot", async () => {
    const { result } = renderHook(() =>
      useDataFetching("https://fakestoreapi.com/products/category/electronics")
    );
    await waitFor(() => expect(result.current[0]).not.toBeNull());
    expect(result.current[0]).toMatchSnapshot();
  });
});

it.skip("renders images", async () => {
  const { result } = renderHook(() =>
    useDataFetching("https://fakestoreapi.com/products/category/electronics")
  );

  await waitFor(() => expect(result.current[0]).not.toBeNull());

  render(<ItemList data={result.current[0]} />);

  const imgElements = await screen.findAllByRole("img");
  expect(imgElements.length).toBeGreaterThan(0);
});

it("should produce an error if mock API call fails", async () => {
  server.use(
    rest.get(
      "https://fakestoreapi.com/products/category/electronics",
      (req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.json({
            error: "Oops",
          })
        );
      }
    )
  );

  const { result } = renderHook(() =>
    useDataFetching("https://fakestoreapi.com/products/category/electronics")
  );

  render(<ItemList data={result.current[0]} />);

  await waitFor(() =>
    expect(screen.getByTestId("error-message").toBeVisible())
  );
  screen.debug();
});

it.skip("renders ItemsList Component", async () => {
  render(<ItemList />);
  const featuredItemsTitle = await screen.findByText("Today's Stock");
  expect(featuredItemsTitle).toBeVisible();
});
