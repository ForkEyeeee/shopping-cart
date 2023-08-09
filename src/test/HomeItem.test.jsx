import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeItem from "../components/HomeItem";

describe("HomeItem", () => {
  it("renders HomeItem Component", () => {
    render(<HomeItem />);
    expect(screen.getAllByRole("button")).toBeDefined();
    expect(screen.getByText("Add to Cart")).toBeVisible();
    expect(screen.getByText("Clear Items")).toBeVisible();
  });
});
