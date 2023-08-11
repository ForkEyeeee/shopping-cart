import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorPage from "../components/ErrorPage";

describe("Errorpage", () => {
  it("renders Errorpage Component", () => {
    render(<ErrorPage />);
    const error = screen.getByText("404 - Page Not Found");
    expect(error).toBeInTheDocument();
  });
});
