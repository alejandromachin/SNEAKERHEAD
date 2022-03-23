import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import { Ad } from "../../Types/Ad";
import UserAdsPage from "./UserAdsPage";

const mockUseNavigate = jest.fn();
const mockUser = { name: "test", id: "test" };
const mockAds: Ad[] = [
  {
    id: "ad test",
    brand: "test",
    style: "test",
    colorway: "test",
    image1: "test",
    image2: "test",
    image3: "test",
    image4: "test",
    price: "test",
    likes: 0,
    size: 40,
    condition: 10,
    box: "good",
    state: "new",
    owner: "test",
    ownerEmail: "test@email.com",
  },
];

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockUseNavigate,
  };
});

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useSelector: (cb: CallableFunction) =>
      cb({ user: mockUser, userAds: mockAds }),
  };
});

describe("Given an UserAdsPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a tittle and a list of ads", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserAdsPage />
          </Provider>
        </BrowserRouter>
      );

      const listItems = screen.getAllByRole("listitem");
      const title = screen.getByText("Hello, test");

      expect(listItems).toHaveLength(1);
      expect(title).toBeInTheDocument();
    });
  });
  describe("When it is clicked on an user ad", () => {
    test("Then it should show a call the navigation method", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserAdsPage />
          </Provider>
        </BrowserRouter>
      );

      const listItems = screen.getAllByRole("listitem");
      userEvent.click(listItems[0]);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
