import { IMsg } from "./i-msg";

export interface IProgress {
  next(info: IMsg): IMsg;
  reset(info: IMsg);
}
