import { Ad } from "./Ad";

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
