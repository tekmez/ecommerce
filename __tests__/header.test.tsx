import React from "react";
import { render } from "@testing-library/react";
import Header from "../app/components/Header";
import "jest-matchmedia-mock";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
}));
jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue("/mock-pathname"),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams("")),
}));
jest.mock("use-debounce", () => ({
  useDebouncedCallback: (callback: Function) => callback,
}));

test("renders Header component correctly", () => {
  const { getByText, getByRole } = render(<Header />);

  expect(getByText("Eteration")).toBeInTheDocument();
  expect(getByRole("textbox")).toBeInTheDocument();

  expect(getByText("117.000₺")).toBeInTheDocument();
  expect(getByText("Kerem")).toBeInTheDocument();

  const dropdownTrigger = getByRole("button", { name: "avatar" });
  expect(dropdownTrigger).toBeInTheDocument();
});
