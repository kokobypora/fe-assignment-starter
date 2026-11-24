import { render, screen } from "@testing-library/react";

import HomePage from "./page";

describe("HomePage", () => {
  it("renders the assignment heading", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Frontend Assignment" }),
    ).toBeInTheDocument();
  });
});
