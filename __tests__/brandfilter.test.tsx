import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import BrandsFilterList from "../app/components/BrandsFilterList";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
  usePathname: jest.fn().mockReturnValue("/mock-pathname"),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams("")),
}));

global.fetch = jest.fn().mockResolvedValue({
  json: jest
    .fn()
    .mockResolvedValue([{ brand: "test brand 1" }, { brand: "test brand 2" }]),
});

describe("BrandsFilterList component", () => {
  test("snapshot test", () => {
    const { container } = render(<BrandsFilterList />);
    expect(container).toMatchSnapshot();
  });

  test("renders BrandsFilterList component correctly", async () => {
    const { getByPlaceholderText, getByRole, queryByText } = render(
      <BrandsFilterList />
    );

    await waitFor(() => {
      expect(queryByText("test brand 1")).toBeInTheDocument();
      expect(queryByText("test brand 2")).toBeInTheDocument();
    });

    expect(queryByText("Loading...")).toBeNull();

    const searchInput = getByPlaceholderText("Search Brand");
    fireEvent.change(searchInput, { target: { value: "test" } });

    await waitFor(() => {
      expect(queryByText("test brand 1")).toBeInTheDocument();
      expect(queryByText("test brand 2")).toBeInTheDocument();
    });

    const checkbox = getByRole("checkbox", { name: "test brand 1" });
    fireEvent.click(checkbox);

    expect(useRouter().push).toHaveBeenCalledWith(
      "/mock-pathname?brand=test+brand+1"
    );
  });
});
