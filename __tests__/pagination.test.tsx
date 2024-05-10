import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import MyPagination from "../app/components/Pagination";
import "@testing-library/jest-dom";

// Mock useRouter hook
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("MyPagination component", () => {
  it("updates URL when page changes", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    const { getByRole } = render(<MyPagination />);

    // Simulate page change
    fireEvent.click(getByRole("button", { name: "2" }));

    // Check if useRouter hook is called with the correct URL
    expect(pushMock).toHaveBeenCalledWith("/?page=2");
  });

  // Add more test cases as needed
});
