import { render, screen } from "@testing-library/react";
import Home from "./page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    priority,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => (
    <img {...props} />
  ),
}));

describe("Home", () => {
  it("renders the getting started heading", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /To get started, edit the page.tsx file./i,
      }),
    ).toBeInTheDocument();
  });

  it("renders links to documentation and deploy", () => {
    render(<Home />);

    expect(
      screen.getByRole("link", { name: /Deploy Now/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Documentation/i }),
    ).toBeInTheDocument();
  });
});
