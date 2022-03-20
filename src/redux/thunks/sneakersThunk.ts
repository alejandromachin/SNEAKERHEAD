import axios from "axios";
import { Dispatch } from "react";
import { LoadSneakerInfoAction, LoadSneakersAction } from "../../Types/Action";
import {
  loadSneakerInfoAction,
  loadSneakersAction,
  loadSpinnerSneakersAction,
} from "../actions/sneakersActionCreator/sneakersActionCreator";

export const loadAllSneakersThunk =
  (limit: number, skip: number) =>
  async (dispatch: Dispatch<LoadSneakersAction>) => {
    const url = `${process.env.REACT_APP_URL}sneakers/?limit=${limit}&skip=${skip}`;

    const { data } = await axios.get(url as string);
    dispatch(loadSneakersAction(data));
  };
export const moreInfoSneakerThunk =
  (id: string) => async (dispatch: Dispatch<LoadSneakerInfoAction>) => {
    const url = `${process.env.REACT_APP_URL}sneakers/${id}`;
    const { data } = await axios.get(url as string);

    dispatch(loadSneakerInfoAction(data));
  };
export const loadSpinnerSneakersThunk = async (
  dispatch: Dispatch<LoadSneakersAction>
) => {
  const url = `${process.env.REACT_APP_URL}sneakers/spinner`;

  const { data } = await axios.get(url as string);
  dispatch(loadSpinnerSneakersAction(data));
};
