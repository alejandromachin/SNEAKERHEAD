import axios from "axios";
import { Dispatch } from "react";
import toast from "react-hot-toast";
import {
  LoadSneakerInfoAction,
  LoadSneakersAction,
  SearchParamsActionType,
} from "../../Types/Action";
import { ErrorAction } from "../../Types/Error";
import { errorAction } from "../actions/errorsActionCreator/errorActionCreator";
import {
  loadSneakerInfoAction,
  loadSneakersAction,
  loadSneakersByParamAction,
  loadSpinnerSneakersAction,
  searchParamsAction,
} from "../actions/sneakersActionCreator/sneakersActionCreator";

export const loadAllSneakersThunk =
  (limit: number, skip: number) =>
  async (dispatch: Dispatch<LoadSneakersAction>) => {
    const url = `${process.env.REACT_APP_URL}sneakers/?limit=${limit}&skip=${skip}`;

    const { data } = await axios.get(url);
    dispatch(loadSneakersAction(data));
  };

export const loadAllSneakersByParamsThunk =
  (limit: number, skip: number, params: string) =>
  async (
    dispatch: Dispatch<LoadSneakersAction> | Dispatch<SearchParamsActionType>
  ) => {
    if (params === "") {
      params = "all";
    }
    const url = `${process.env.REACT_APP_URL}sneakers/search/${params}?limit=${limit}&skip=${skip}`;

    const { data } = await axios.get(url);

    (dispatch as Dispatch<SearchParamsActionType>)(searchParamsAction(params));

    (dispatch as Dispatch<LoadSneakersAction>)(loadSneakersByParamAction(data));
  };

export const moreInfoSneakerThunk =
  (id: string) => async (dispatch: Dispatch<LoadSneakerInfoAction>) => {
    const url = `${process.env.REACT_APP_URL}sneakers/${id}`;
    const { data } = await axios.get(url);

    dispatch(loadSneakerInfoAction(data));
  };

export const loadSpinnerSneakersThunk = async (
  dispatch: Dispatch<LoadSneakersAction> | Dispatch<ErrorAction>
) => {
  const url = `${process.env.REACT_APP_URL}sneakers/slider`;

  await axios
    .get(url)
    .then((response) => {
      (dispatch as Dispatch<LoadSneakersAction>)(
        loadSpinnerSneakersAction(response.data)
      );
    })
    .catch((error) => {
      (dispatch as Dispatch<ErrorAction>)(errorAction(error.response.data));
      toast.error(`${error.response.data.message}`, {
        duration: 1000,
        style: {
          position: "relative",
          top: 330,
          color: "#ff0000",
          backgroundColor: "#d3e2ff",
        },
      });
    });
};
