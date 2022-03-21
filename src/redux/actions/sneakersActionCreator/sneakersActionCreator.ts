import {
  Action,
  LoadSneakerInfoAction,
  LoadSneakersAction,
  SearchParamsActionType,
  sizeFilterActionType,
} from "../../../Types/Action";
import { Sneaker } from "../../../Types/Sneaker";
import actionTypes from "../actionTypes";

export const loadSneakersAction = (
  sneakers: Sneaker[]
): LoadSneakersAction => ({
  type: actionTypes.loadSneakers,
  sneakers,
});
export const loadSneakersByParamAction = (
  sneakers: Sneaker[]
): LoadSneakersAction => ({
  type: actionTypes.loadSneakersByParam,
  sneakers,
});

export const loadSneakerInfoAction = (
  sneaker: Sneaker
): LoadSneakerInfoAction => ({
  type: actionTypes.loadSneakerInfo,
  sneaker,
});

export const cleanUpSneakerAction = (): Action => ({
  type: actionTypes.cleanUpSneaker,
});

export const cleanUpSneakersAction = (): Action => ({
  type: actionTypes.cleanUpSneakers,
});

export const loadSpinnerSneakersAction = (
  sneakers: Sneaker[]
): LoadSneakersAction => ({
  type: actionTypes.loadSpinnerSneakers,
  sneakers,
});

export const searchParamsAction = (params: string): SearchParamsActionType => ({
  type: actionTypes.searchParams,
  params,
});

export const sizeFilterAction = (size: number): sizeFilterActionType => ({
  type: actionTypes.filterBySize,
  size,
});
