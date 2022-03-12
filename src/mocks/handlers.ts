import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://finalprojectback.onrender.com/sneakers",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: "123",
            brand: "Jordan",
            style: "1 high",
            colorway: "Chicago",
            releaseDate: "1/2/1980",
            image: "image",
            averagePrice: "4.000€",
            ads: [],
          },
          {
            id: "123",
            brand: "Jordan",
            style: "1 high",
            colorway: "Chicago",
            releaseDate: "1/2/1980",
            image: "image",
            averagePrice: "4.000€",
            ads: [],
          },
        ])
      );
    }
  ),
  rest.get(`${process.env.REACT_APP_URL}ads/test`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "ad test",
          brand: "test",
          style: "test",
          colorway: "test",
          images: ["test"],
          price: "test",
          likes: 0,
          size: 40,
          condition: 10,
        },
      ])
    );
  }),
];
