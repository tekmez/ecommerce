import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";
import ModelFilterList from "@/app/components/ModelFilterList";
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
    .mockResolvedValue([{ model: "test model 1" }, { model: "test model 2" }]),
});

describe("ModelFilterList component", () => {
  test("renders ModelFilterList component correctly", async () => {
    const { getByPlaceholderText, getByText, getByRole, queryByText } = render(
      <ModelFilterList />
    );

    await waitFor(() => {
      expect(queryByText("test model 1")).toBeInTheDocument();
      expect(queryByText("test model 2")).toBeInTheDocument();
    });

    expect(queryByText("Loading...")).toBeNull();

    const searchInput = getByPlaceholderText("Search Model");
    fireEvent.change(searchInput, { target: { value: "test" } });

    await waitFor(() => {
      expect(queryByText("test model 1")).toBeInTheDocument();
      expect(queryByText("test model 2")).toBeInTheDocument();
    });

    const checkbox = getByRole("checkbox", { name: "test model 1" });
    fireEvent.click(checkbox);

    expect(useRouter().push).toHaveBeenCalledWith(
      "/mock-pathname?model=test+model+1"
    );
  });
});
