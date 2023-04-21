import { Msg } from "./msg";

export interface IProgress {
  next(info: Msg): Msg;
  reset(info: Msg): void;
}
