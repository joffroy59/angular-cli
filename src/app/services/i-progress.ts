import { Info } from "./info";

export interface IProgress {
  next(info: Info): Info;
}
