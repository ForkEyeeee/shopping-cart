import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeItemList from "../components/HomeItemList";
import useDataFetching from "../hooks/fetchItemData";
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

  render(<HomeItemList data={result.current[0]} />);

  const imgElements = await screen.findAllByRole("img");
  expect(imgElements.length).toBeGreaterThan(0);
});

it("renders ItemsList Component", async () => {
  render(<HomeItemList />);
  const featuredItemsTitle = await screen.findByText("Today's Stock");
  expect(featuredItemsTitle).toBeVisible();
});
