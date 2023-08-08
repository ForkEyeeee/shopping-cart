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

describe("useDataFetching Hook", () => {
  it("fetches electronic products and matches the snapshot", async () => {
    const { result } = renderHook(() =>
      useDataFetching("https://fakestoreapi.com/products/category/electronics")
    );
    await waitFor(() => expect(result.current[0]).not.toBeNull());
    expect(result.current[0]).toMatchSnapshot();
  });
});

it("renders images", async () => {
  const { result } = renderHook(() =>
    useDataFetching("https://fakestoreapi.com/products/category/electronics")
  );

  await waitFor(() => expect(result.current[0]).not.toBeNull());

  render(<ItemList data={result.current[0]} />);

  const imgElements = await screen.findAllByRole("img");
  expect(imgElements.length).toBeGreaterThan(0);
});

it.skip("should produce an error if mock API call fails", async () => {
  // Set up the error response for the correct URL
  server.use(
    rest.get(
      "https://fakestoreapi.com/products/category/electronics",
      (req, res, ctx) => {
        return res(ctx.status(500));
      }
    )
  );

  // Render the component
  const { result } = renderHook(() =>
    useDataFetching("https://fakestoreapi.com/products/category/electronics")
  );
  const { findAllByText } = render(<ItemList data={result.current[0]} />);
  // Wait for the error message to appear

  // Check if the error message is visible
  const errorText = await screen.findAllByText("Oops");
  expect(errorText).toBeInTheDocument();
});

it.skip("renders ItemsList Component", async () => {
  render(<ItemList />);
  const featuredItemsTitle = await screen.findByText("Today's Stock");
  expect(featuredItemsTitle).toBeVisible();
});
