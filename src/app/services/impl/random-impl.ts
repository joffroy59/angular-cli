import { Msg } from "../../common/msg";
import { IProgress } from "../i-progress";
import { LogService } from "../log.service";

export class RandomImpl implements IProgress {
  factor: number;
  private logger: LogService = new LogService();

  constructor(factor: number) {
    this.factor = factor;
  }

  next(info: Msg): Msg {
    this.logger.debug("impl_ramdon_" + this.factor);
    let value = Math.floor(Math.random() * this.factor) + 1;
    let deltaSumOld = info.deltaSum;
    return {
      info: value.toString(),
      value: value,
      counter: value,
      deltaSum: deltaSumOld + value,
    };
  }

  reset(info: Msg) {
    this.logger.debug("reset");
    info.value = 0;
    info.info = "0";
    info.counter = 0;
    info.deltaSum = 0;
  }
}
