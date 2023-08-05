import { getByRole, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("renders Footer Component", () => {
    render(<Footer />);
    const footerText = screen.getByText("Contact Us");
    expect(footerText).toBeVisible();
  });
});
