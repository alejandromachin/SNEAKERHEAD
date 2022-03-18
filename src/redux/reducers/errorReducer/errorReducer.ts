import { ErrorAction, GenericErrorAction } from "../../../Types/Error";
import errorTypes from "../../actions/errorTypes";

const errorReducer = (
  currentError: Error | {} = {},
  action: ErrorAction | GenericErrorAction = {}
) => {
  let newError;
  switch (action.type) {
    case errorTypes.error:
      newError = { ...(action as ErrorAction).error };
      break;
    case errorTypes.login:
      newError = { ...(action as ErrorAction).error };
      break;
    case errorTypes.register:
      newError = { ...(action as ErrorAction).error };
      break;
    default:
      newError = { ...currentError };
  }
  return newError;
};

export default errorReducer;
