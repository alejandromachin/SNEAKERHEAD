import { Ad } from "./Ad";

export interface User {
  name: string;
  username: string;
  password: string;
  email: string;
  city: string;
  ads: Ad[];
}
