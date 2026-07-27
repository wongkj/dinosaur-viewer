import { render, screen } from "@testing-library/react";
import Home from "./page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: React.ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean },
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { priority, ...imgProps } = props;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img {...imgProps} alt={imgProps.alt ?? ""} />
    );
  },
}));

describe("Home", () => {
  it("renders the page heading", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /Dinosaur Viewer/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the main landmark", () => {
    render(<Home />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
