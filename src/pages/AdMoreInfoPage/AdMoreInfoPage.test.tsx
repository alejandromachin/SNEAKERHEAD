import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";

import AdMoreInfoPage from "./AdMoreInfoPage";

const mockUseParams = { id: "test" };
const mockUseDispatch = jest.fn();
const mockUser = { id: "test" };
const mockAd = { owner: "test" };
jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useParams: () => mockUseParams,
  };
});
jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useSelector: (cb: CallableFunction) => cb({ user: mockUser, ad: mockAd }),
  };
});

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
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

describe("Given a AdInfoPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image, 3 headins and 3 textboxes and a button with the text 'EDIT'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AdMoreInfoPage />
          </Provider>
        </BrowserRouter>
      );

      const headings = screen.getAllByRole("heading");
      const button = screen.getByRole("button", { name: /edit/i });

      expect(headings).toHaveLength(3);
      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is clicked on its deleted button", () => {
    test("Then it should call the dispatch", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AdMoreInfoPage />
          </Provider>
        </BrowserRouter>
      );
      const editButton = screen.getByRole("button", { name: /edit/i });

      userEvent.click(editButton);

      const deleteButton = screen.getByRole("button", { name: /delete/i });

      userEvent.click(deleteButton);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
