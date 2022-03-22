import { Ad } from "./Ad";
import { LoginData } from "./LoginData";
import { RegisterData } from "./RegisterData";
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
export interface RegisterAction extends Action {
  registerData: RegisterData;
}

export interface LoginAction extends Action {
  login: LoginData;
}

export interface LoadUserAdsAction extends Action {
  ads: Ad[];
}
export interface SearchParamsActionType extends Action {
  params: string;
}
export interface sizeFilterActionType extends Action {
  size: number;
}
