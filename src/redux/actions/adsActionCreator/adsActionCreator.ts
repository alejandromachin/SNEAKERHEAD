import {
  Action,
  AdAction,
  DeleteAdAction,
  LoadAdsAction,
} from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import actionTypes from "../actionTypes";

export const createAdAction = (ad: Ad): AdAction => ({
  type: actionTypes.createAd,
  ad,
});

export const deleteAdAction = (id: string): DeleteAdAction => ({
  type: actionTypes.deleteAd,
  id,
});

export const editAdAction = (ad: Ad): AdAction => ({
  type: actionTypes.editAd,
  ad,
});

export const loadAdsAction = (ads: Ad[]): LoadAdsAction => ({
  type: actionTypes.loadAds,
  ads,
});

export const loadHotDealsAction = (ads: Ad[]): LoadAdsAction => ({
  type: actionTypes.loadAds,
  ads,
});

export const loadAdAction = (ad: Ad): AdAction => ({
  type: actionTypes.loadAd,
  ad,
});

export const filterAdsBySizeAction = (ads: Ad[]): LoadAdsAction => ({
  type: actionTypes.filterAdsBySize,
  ads,
});

export const cleanUpAdsAction = (): Action => ({
  type: actionTypes.cleanUpAds,
});
