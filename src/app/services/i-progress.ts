import { Msg } from "../common/msg";

export interface IProgress {
  next(info: Msg): Msg;
  reset(info: Msg): void;
}
