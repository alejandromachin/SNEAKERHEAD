import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import { Ad } from "../../Types/Ad";
import SneakerInfoPage from "./SneakerInfoPage";

const mockUseParams = { id: "test" };

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useParams: () => mockUseParams,
  };
});
const mockFilter: number[] = [];
const mockUser = { name: "test", id: "test" };
const mockAds: Ad[] = [
  {
    id: "test1",
    brand: "test",
    style: "test",
    colorway: "test",
    condition: 10,
    image1: "test1",
    image2: "test2",
    image3: "test3",
    image4: "test",
    price: "10.000",
    size: 40,
    likes: 0,
    box: "good",
    state: "new",
    owner: "622b15710695a90af3e56a20",
  },
  {
    id: "test2",
    brand: "test",
    style: "test",
    colorway: "test",
    condition: 10,
    image1: "test",
    image2: "test",
    image3: "test",
    image4: "test",
    price: "10.000",
    size: 40,
    likes: 0,
    box: "good",
    state: "new",
    owner: "622b15710695a90af3e56a20",
  },
  {
    id: "test3",
    brand: "test",
    style: "test",
    colorway: "test",
    condition: 10,
    image1: "test",
    image2: "test",
    image3: "test",
    image4: "test",
    price: "10.000",
    size: 40,
    likes: 0,
    box: "good",
    state: "new",
    owner: "622b15710695a90af3e56a20",
  },
  {
    id: "test4",
    brand: "test",
    style: "test",
    colorway: "test",
    condition: 10,
    image1: "test",
    image2: "test",
    image3: "test",
    image4: "test",
    price: "10.000",
    size: 40,
    likes: 0,
    box: "good",
    state: "new",
    owner: "622b15710695a90af3e56a20",
  },
];
const mockSneaker = {
  id: "123",
  brand: "Jordan",
  style: "1",
  colorway: "Chicago",
  releaseDate: "april 1990",
  image: "image",
  averagePrice: "5.000€",
};

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useSelector: (cb: CallableFunction) =>
      cb({
        user: mockUser,
        ads: mockAds,
        sneaker: mockSneaker,
        filter: mockFilter,
      }),
  };
});

describe("Given a SneakerInfoPage component", () => {
  describe("When it is rendered with a sneaker with 4 ads", () => {
    test("Then it should show 1 image of the sneaker, 2 images of the ads and a button to sell and a button to load more", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SneakerInfoPage />
          </Provider>
        </BrowserRouter>
      );

      const images = screen.getAllByRole("img");
      const buttonSell = screen.getByRole("button", { name: "SELL" });
      const buttonLoad = screen.getByRole("button", { name: "LOAD MORE" });

      expect(images).toHaveLength(3);
      expect(buttonSell).toBeInTheDocument();
      expect(buttonLoad).toBeInTheDocument();
    });
  });
  describe("When its button is clicked", () => {
    test("Then it should load 2 more ads", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SneakerInfoPage />
          </Provider>
        </BrowserRouter>
      );

      const buttonLoad = screen.getByRole("button", { name: "LOAD MORE" });

      userEvent.click(buttonLoad);

      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(5);
    });
  });
});
