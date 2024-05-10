import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MyDropdown from "../app/components/Dropdown";
import "jest-matchmedia-mock";
import "@testing-library/jest-dom";

test("renders MyDropdown component correctly", () => {
  const { getByRole, getByLabelText } = render(<MyDropdown />);

  // Check if Avatar component is rendered
  const avatarElement = getByLabelText("avatar");
  expect(avatarElement).toBeInTheDocument();

  // Check if Dropdown component is rendered
  const dropdownElement = getByRole("combobox");
  expect(dropdownElement).toBeInTheDocument();
});

test("opens dropdown menu on click", () => {
  const { getByRole, getByText } = render(<MyDropdown />);

  // Check if dropdown menu is initially closed
  const dropdownMenu = getByRole("menu", { hidden: true });
  expect(dropdownMenu).toHaveClass("ant-dropdown-hidden");

  // Click on Avatar to open dropdown menu
  const avatarElement = getByRole("button");
  fireEvent.click(avatarElement);

  // Check if dropdown menu is opened
  expect(dropdownMenu).not.toHaveClass("ant-dropdown-hidden");

  // Check if menu items are rendered correctly
  expect(getByText("Kerem")).toBeInTheDocument();
  expect(getByText("117.000₺")).toBeInTheDocument();
});
