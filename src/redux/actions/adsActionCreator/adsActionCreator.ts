import { Action } from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import actionTypes from "../actionTypes";

interface AdAction extends Action {
  ad: Ad;
}
interface DeleteAdAction extends Action {
  id: string;
}

interface LoadAdsAction extends Action {
  ads: Ad[];
}

export const createAdAction = (ad: Ad): AdAction => ({
  type: actionTypes.createAd,
  ad,
});

export const deleteAdAction = (id: string): DeleteAdAction => ({
  type: actionTypes.deleteAd,
  id,
});

export const editAddAction = (ad: Ad): AdAction => ({
  type: actionTypes.editAd,
  ad,
});

export const loadAdsAction = (ads: Ad[]): LoadAdsAction => ({
  type: actionTypes.loadAds,
  ads,
});
