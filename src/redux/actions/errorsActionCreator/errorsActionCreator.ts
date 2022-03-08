import { Action } from "../../../Types/Action";
import errorTypes from "../errorTypes";

interface ErrorAction extends Action {
  error: string;
}

export const notFoundErrorAction = (error: string): ErrorAction => ({
  type: errorTypes.notFound,
  error,
});

export const generalErrorAction = (error: string): ErrorAction => ({
  type: errorTypes.generalError,
  error,
});
