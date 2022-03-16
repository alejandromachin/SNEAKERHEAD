import { Ad } from "./Ad";
import { LoginData } from "./LoginData";
import { Sneaker } from "./Sneaker";
import { User } from "./User";

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
export interface RegisterAction extends Action {
  user: User;
}

export interface LoginAction extends Action {
  login: LoginData;
}
