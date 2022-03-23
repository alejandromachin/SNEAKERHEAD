import { rest } from "msw";

const mockAd = {
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
};
const mockSneaker = {
  id: "123",
  brand: "Jordan",
  style: "1 high",
  colorway: "Chicago",
  releaseDate: "1/2/1980",
  image: "image",
  averagePrice: "4.000€",
  ads: [],
};
const mockUser = {
  name: "test",
  lastname: "test",
  username: "test",
  email: "test",
  city: "test",
  ads: ["test"],
};

export const handlers = [
  rest.get(`${process.env.REACT_APP_URL}sneakers/`, (req, res, ctx) => {
    req.url.searchParams.get("limit");
    req.url.searchParams.get("skip");
    return res(ctx.status(200), ctx.json([mockSneaker, mockSneaker]));
  }),
  rest.get(`${process.env.REACT_APP_URL}ads/hotdeals/load`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockAd, mockAd]));
  }),
  rest.get(`${process.env.REACT_APP_URL}sneakers/test`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockSneaker]));
  }),
  rest.get(`${process.env.REACT_APP_URL}ads/test`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockAd]));
  }),
  rest.get(`${process.env.REACT_APP_URL}ads/detail/test`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockAd]));
  }),
  rest.delete(`${process.env.REACT_APP_URL}ads/test`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockAd]));
  }),
  rest.post(`${process.env.REACT_APP_URL}user/register`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockUser]));
  }),
  rest.post(`${process.env.REACT_APP_URL}user/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          data: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsImxhc3RuYW1lIjoidGVzdCIsInVzZXJuYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdCIsImlkIjoiNjIzMzQ0MDM2ZGFhNjQ1ZWNiMjVmZTg5IiwiaWF0IjoxNjQ3NTI3NzczfQ.drLON9-3m3l5x7CleS3w64mBLI-Gu6QZZH6gBLfzjyo",
          },
        },
      ])
    );
  }),
  rest.post(`${process.env.REACT_APP_URL}ads/new`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockAd]));
  }),
  rest.patch(`${process.env.REACT_APP_URL}ads/test`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockAd]));
  }),
  rest.get(`${process.env.REACT_APP_URL}user/ads/test`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockAd]));
  }),
  rest.get(`${process.env.REACT_APP_URL}sneakers/slider`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([mockSneaker, mockSneaker]));
  }),
  rest.get(
    `${process.env.REACT_APP_URL}ads/test`,

    (req, res, ctx) => {
      req.url.searchParams.get("limit");
      req.url.searchParams.get("skip");
      return res(ctx.status(200), ctx.json([mockSneaker, mockSneaker]));
    }
  ),
  rest.get(
    `${process.env.REACT_APP_URL}sneakers/search/all`,

    (req, res, ctx) => {
      req.url.searchParams.get("limit");
      req.url.searchParams.get("skip");
      return res(
        ctx.status(200),
        ctx.json({ data: [mockSneaker, mockSneaker] })
      );
    }
  ),
];
