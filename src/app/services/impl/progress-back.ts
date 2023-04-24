import { IProgress } from "../i-progress";
import { Msg } from "src/app/common/msg";

export class ProgressBack implements IProgress {
  next(info: Msg): Msg {
    return new Msg();
  }
  reset(info: Msg): void {}
}
