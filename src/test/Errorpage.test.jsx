import { getByRole, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Errorpage from "../components/ErrorPage";

describe("Errorpage", () => {
  it("renders Errorpage Component", () => {
    render(<Errorpage />);
    const error = screen.getByText("Error");
    expect(error).toBeInTheDocument();
  });
});
