import { Action } from "../../../Types/Action";
import errorTypes from "../errorTypes";

interface ErrorAction extends Action {
  errorMessage: string;
}

export const errorAction = (errorMessage: string): ErrorAction => ({
  type: errorTypes.error,
  errorMessage,
});
