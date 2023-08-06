import { getByRole, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutUs from "../components/AboutUs";
import { aboutUsText } from "../components/AboutUs";

describe("AboutUs Page", () => {
  it("renders AboutUs Component", () => {
    render(<AboutUs />);
    const text = screen.getByText("aa");
    expect(text).toBeVisible();
  });
});
