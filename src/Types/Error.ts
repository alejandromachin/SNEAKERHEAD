export interface Error {
  error: boolean;
  code: number;
  message: string;
}

export interface GenericErrorAction {
  type?: string;
}
export interface ErrorAction extends GenericErrorAction {
  error: Error;
}
