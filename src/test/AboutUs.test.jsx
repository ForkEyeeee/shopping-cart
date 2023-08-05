import { getByRole, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutUs from "../components/AboutUs";

const AboutUsText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

describe("AboutUs Page", () => {
  it("renders AboutUs Component", () => {
    render(<AboutUs />);
    const error = screen.getByText(AboutUsText);
    expect(error).toBeInTheDocument();
  });
});
