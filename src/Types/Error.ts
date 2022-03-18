import { Action } from "./Action";

export interface Error {
  code: number;
  message: string;
}
export interface ErrorAction extends Action {
  error: Error;
}
