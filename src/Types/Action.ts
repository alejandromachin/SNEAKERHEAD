import { Ad } from "./Ad";
import { Sneaker } from "./Sneaker";

export interface Action {
  type?: string;
}

export interface AdAction extends Action {
  ad: Ad;
}
export interface DeleteAdAction extends Action {
  id: string;
}

export interface LoadAdsAction extends Action {
  ads: Ad[];
}

export interface LoadSneakersAction extends Action {
  sneakers: Sneaker[];
}
export interface LoadSneakerInfoAction extends Action {
  sneaker: Sneaker;
}
