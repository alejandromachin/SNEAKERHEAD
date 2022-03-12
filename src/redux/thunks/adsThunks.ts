import axios from "axios";
import { Dispatch } from "react";
import { LoadAdsAction } from "../../Types/Action";
import {
  filterAdsBySizeAction,
  loadAdsAction,
} from "../actions/adsActionCreator/adsActionCreator";

export const loadAllSneakerAdsThunk =
  (id: string) => async (dispatch: Dispatch<LoadAdsAction>) => {
    const url = `${process.env.REACT_APP_URL}ads/${id}`;

    const { data } = await axios.get(url as string);

    dispatch(loadAdsAction(data));
  };

export const filterAdsBySizeThunk =
  (size: number) => async (dispatch: Dispatch<LoadAdsAction>) => {
    const url = `${process.env.REACT_APP_URL}ads/?size=${size}`;

    const { data } = await axios.get(url as string);

    dispatch(filterAdsBySizeAction(data));
  };
