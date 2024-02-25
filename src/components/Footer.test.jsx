import { fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  // 1. Check kalau Footer beneran ke render
  it("should render Footer component", () => {
    const renderedFooter = render(<Footer />);

    expect(renderedFooter).toBeDefined();
  });

  // 2. Check behavior props Footer
  it("should render proper props", async () => {
    const renderedFooter = render(<Footer message="Footer Message" />);

    const propsMessage = await renderedFooter.findByTestId("props-message");

    expect(propsMessage).toHaveTextContent("Footer Message");
  });

  // 3. Check function button Footer untuk change message
  it("should change message when button is clicked", async () => {
    const renderedFooter = render(<Footer message="Footer Message" />);

    const stateMessage = await renderedFooter.findByTestId("state-message");
    expect(stateMessage).toHaveTextContent("Hello World");

    const btn = await renderedFooter.findByTestId("change-message-btn");
    fireEvent.click(btn);

    await waitFor(() => {
      expect(stateMessage).toHaveTextContent("State Changed");
    });
  });
});
