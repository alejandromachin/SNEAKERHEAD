import axios from "axios";
import { Dispatch } from "react";
import { LoadSneakersAction } from "../../Types/Action";
import { loadSneakersAction } from "../actions/sneakersActionCreator/sneakersActionCreator";

export const loadAllSneakersThunk = async (
  dispatch: Dispatch<LoadSneakersAction>
) => {
  const url = `{process.env.URL}sneakers`;
  const { data } = await axios.get(url as string);
  dispatch(loadSneakersAction(data));
};
