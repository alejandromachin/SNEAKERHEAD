import { Ad } from "./Ad";
import { Sneaker } from "./Sneaker";

export interface Action {
  type?: string;
  sneakers?: Sneaker[];
  sneaker?: Sneaker;
  ad?: Ad;
  ads?: Ad[];
}
