import { Ad } from "./Ad";

export interface Sneaker {
  brand: string;
  style: string;
  colorway: string;
  releaseDate: string;
  image: string;
  averagePrice: string;
  ads?: Ad[];
}
