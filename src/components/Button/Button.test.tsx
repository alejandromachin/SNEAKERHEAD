import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered with the text 'Hello'", () => {
    test("Then it should display the text 'Hello' on it", () => {
      const expectedText = "Hello";
      render(<Button actionOnClick={() => {}} text={expectedText} />);

      const text = screen.getByRole("button", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
  describe("When it is rendered with an action", () => {
    test("Then it should call the action on click", () => {
      const expectedAction = jest.fn();
      render(<Button actionOnClick={expectedAction} text={""} />);

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(expectedAction).toHaveBeenCalled();
    });
  });
});
