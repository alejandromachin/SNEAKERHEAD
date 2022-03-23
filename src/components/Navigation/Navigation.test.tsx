import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Navigation from "./Navigation";

const mockUser = { name: "test", id: "test" };
const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useSelector: (cb: CallableFunction) => cb({ user: mockUser }),
    useDispatch: () => mockUseDispatch,
  };
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => {
    return {
      matches: false,
      media: query,
      onchange: null,
    };
  },
});

describe("Given a Navigation component", () => {
  describe("When it is rendered with an user logged", () => {
    test("Then it should show 4 anchors ", () => {
      const expectedNumberOfAnchors = 4;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const anchors = screen.getAllByRole("link").length;

      expect(anchors).toBe(expectedNumberOfAnchors);
    });
  });
  describe("When it is clicked on the burger menu", () => {
    test("Then it should show the message 'Hello test'", () => {
      const expectedNumberOfAnchors = 5;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const anchors = screen.getAllByRole("link");
      userEvent.click(anchors[0]);

      const salutation = screen.getByText("Hello, test");

      expect(salutation).toBeInTheDocument();
    });
  });
  describe("When it is clicked on the burger menu", () => {
    test("Then it should call the dispatch", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const anchors = screen.getAllByRole("link");
      userEvent.click(anchors[0]);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
