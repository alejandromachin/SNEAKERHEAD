import { Sneaker } from "./Sneaker";

export interface Action {
  type?: string;
  sneakers?: Sneaker[];
  sneaker?: Sneaker;
}
