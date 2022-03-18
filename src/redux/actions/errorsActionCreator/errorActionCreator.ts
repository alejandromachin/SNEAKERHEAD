import { Error, ErrorAction } from "../../../Types/Error";
import errorTypes from "../errorTypes";

export const errorAction = (error: Error): ErrorAction => ({
  type: errorTypes.error,
  error,
});

export const errorOnLoginAction = (error: Error): ErrorAction => ({
  type: errorTypes.login,
  error,
});

export const errorOnRegisterAction = (error: Error): ErrorAction => ({
  type: errorTypes.register,
  error,
});
