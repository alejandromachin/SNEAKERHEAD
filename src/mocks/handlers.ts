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
  rest.get(`${process.env.REACT_APP_URL}sneakers/test`, (req, res, ctx) => {
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
      ])
    );
  }),
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
          box: "good",
          state: "new",
        },
      ])
    );
  }),
  rest.get(`${process.env.REACT_APP_URL}ads/detail/test`, (req, res, ctx) => {
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
          box: "good",
          state: "new",
        },
      ])
    );
  }),
  rest.delete(`${process.env.REACT_APP_URL}ads/test`, (req, res, ctx) => {
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
          box: "good",
          state: "new",
        },
      ])
    );
  }),
  rest.post(`${process.env.REACT_APP_URL}user/register`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "test",
          lastname: "test",
          username: "test",
          password: "test",
          email: "test",
          city: "test",
          ads: ["test"],
        },
      ])
    );
  }),
];
