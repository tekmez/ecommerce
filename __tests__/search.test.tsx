import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Search } from "../app/components/Search";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue("/mock-pathname"),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams("")),
}));

// useDebouncedCallback'u mocklayın
jest.mock("use-debounce", () => ({
  useDebouncedCallback: (callback: Function) => callback,
}));

test("renders Search component correctly", () => {
  const { getByPlaceholderText } = render(<Search />);
  const searchInput = getByPlaceholderText("Search");

  // Simulate search input change
  fireEvent.change(searchInput, { target: { value: "test query" } });

  // Check if useRouter is called with the correct URL
  expect(useRouter().replace).toHaveBeenCalledWith(
    "/mock-pathname?page=1&query=test+query"
  );
});
