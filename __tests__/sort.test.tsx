import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Sort from "../app/components/SortList/Sort";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
  usePathname: jest.fn().mockReturnValue("/mock-pathname"),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams("")),
}));

describe("Sort component", () => {
  test("snapshot test", () => {
    const { container } = render(<Sort />);
    expect(container).toMatchSnapshot();
  });
  test("renders Sort component correctly", () => {
    const { getByLabelText } = render(<Sort />);
    const priceRadioButton = getByLabelText("Price low to High");

    // Simulate radio button change
    fireEvent.click(priceRadioButton);

    // Check if useRouter is called with the correct URL
    expect(useRouter().push).toHaveBeenCalledWith(
      "/mock-pathname?sortBy=price"
    );
  });
});
