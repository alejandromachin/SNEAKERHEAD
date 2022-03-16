import { Ad } from "./Ad";

export interface User {
  id: string;
  name: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  city: string;
  ads: Ad[];
}
