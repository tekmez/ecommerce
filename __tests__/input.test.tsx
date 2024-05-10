import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MyInput from "../app/components/Input/Input";
import "@testing-library/jest-dom";
describe("Input component", () => {
  test("renders without errors", () => {
    render(<MyInput />);
  });

  test("renders the correct initial value", () => {
    const initialValue = "Hello World";
    const { getByDisplayValue } = render(<MyInput value={initialValue} />);
    const inputElement = getByDisplayValue(initialValue);
    expect(inputElement).toBeInTheDocument();
  });

  // test("calls onChange callback when input value changes", () => {
  //   const handleChange = jest.fn();
  //   const { getByPlaceholderText } = render(
  //     <MyInput onChange={handleChange} />
  //   );
  //   const inputElement = getByPlaceholderText("Search");

  //   fireEvent.change(inputElement, { target: { value: "New Value" } });

  //   expect(handleChange).toHaveBeenCalledTimes(1);
  //   expect(handleChange).toHaveBeenCalledWith("New Value");
  // });

  test("matches snapshot with initial value", () => {
    const initialValue = "Hello World";
    const { container } = render(<MyInput value={initialValue} />);
    expect(container).toMatchSnapshot();
  });
});
