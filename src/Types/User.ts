import { Ad } from "./Ad";

export interface User {
  name: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  city: string;
  ads: Ad[];
}
