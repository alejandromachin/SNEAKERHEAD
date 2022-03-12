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
  const url = `${process.env.REACT_APP_URL}sneakers`;

  const { data } = await axios.get(url as string);
  dispatch(loadSneakersAction(data));
};
export const moreInfoSneakerThunk =
  (id: string) => async (dispatch: Dispatch<LoadSneakerInfoAction>) => {
    const url = `${process.env.REACT_APP_URL}sneakers/${id}`;
    const { data } = await axios.get(url as string);

    dispatch(loadSneakerInfoAction(data));
  };
