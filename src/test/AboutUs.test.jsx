import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutUs from "../components/AboutUs";

describe("AboutUs Page", () => {
  it("renders AboutUs Component", () => {
    render(<AboutUs />);
    const text = screen.getByText(`Welcome to our Electronics Store, 
      the trusted destination for top-tier electronics. Since our inception in 2005, we've been committed to 
      bringing you the best in technology. While starting as a small venture, we've since grown and now cater to tech 
      enthusiasts around the world. Our inventory, ranging from the latest smartphones and laptops to essential home appliances, 
      is curated with quality and innovation in mind. Whether you're on the hunt for the newest tech gadget or simply need reliable electronics, 
      our store is here to serve your needs.`);
    expect(text).toBeVisible();
  });
});
