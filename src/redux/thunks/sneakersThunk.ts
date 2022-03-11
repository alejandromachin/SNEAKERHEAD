import axios from "axios";
import { Dispatch } from "react";
import { LoadSneakerInfoAction, LoadSneakersAction } from "../../Types/Action";
import {
  loadSneakerInfoAction,
  loadSneakersAction,
} from "../actions/sneakersActionCreator/sneakersActionCreator";

export const loadAllSneakersThunk = async (
  dispatch: Dispatch<LoadSneakersAction>
) => {
  const url = "https://finalprojectback.onrender.com/sneakers";
  const { data } = await axios.get(url as string);
  dispatch(loadSneakersAction(data));
};
export const moreInfoSneakerThunk =
  (id: string) => async (dispatch: Dispatch<LoadSneakerInfoAction>) => {
    const url = `https://finalprojectback.onrender.com/sneakers/${id}`;
    const { data } = await axios.get(url as string);
    dispatch(loadSneakerInfoAction(data));
  };
