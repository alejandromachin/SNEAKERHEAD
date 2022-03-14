import axios from "axios";
import { Dispatch } from "react";
import { AdAction, DeleteAdAction, LoadAdsAction } from "../../Types/Action";
import { Ad } from "../../Types/Ad";
import {
  createAdAction,
  deleteAdAction,
  loadAdAction,
  loadAdsAction,
} from "../actions/adsActionCreator/adsActionCreator";

interface AdData {
  data: Ad;
}
interface AdsData {
  data: Ad[];
}

export const loadAllSneakerAdsThunk =
  (id: string) => async (dispatch: Dispatch<LoadAdsAction>) => {
    const url = `${process.env.REACT_APP_URL}ads/${id}`;

    const { data }: AdsData = await axios.get(url as string);

    dispatch(loadAdsAction(data));
  };

// export const filterAdsBySizeThunk =
//   (size: number) => async (dispatch: Dispatch<LoadAdsAction>) => {
//     const url = `${process.env.REACT_APP_URL}ads/?size=${size}`;

//     const { data }: AdsData = await axios.get(url as string);

//     dispatch(filterAdsBySizeAction(data));
//   };

export const moreInfoAdThunk =
  (id: string) => async (dispatch: Dispatch<AdAction>) => {
    const url = `${process.env.REACT_APP_URL}ads/detail/${id}`;

    const { data }: AdData = await axios.get(url as string);

    dispatch(loadAdAction(data));
  };

export const createAdThunk =
  (adData: FormData) => async (dispatch: Dispatch<AdAction>) => {
    const url = `${process.env.REACT_APP_URL}ads/new`;

    const { data }: AdData = await axios.post(url as string, adData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch(createAdAction(data));
  };

export const deleteAdThunk =
  (id: string) => async (dispatch: Dispatch<DeleteAdAction>) => {
    const url = `${process.env.REACT_APP_URL}ads/${id}`;

    const { data }: AdData = await axios.delete(url as string);

    dispatch(deleteAdAction(data.id));
  };
