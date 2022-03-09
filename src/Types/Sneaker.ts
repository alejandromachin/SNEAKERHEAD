import { Ad } from "./Ad";

export interface Sneaker {
  id: string;
  brand: string;
  style: string;
  colorway: string;
  releaseDate: string;
  image: string;
  averagePrice: string;
  ads?: Ad[];
}
