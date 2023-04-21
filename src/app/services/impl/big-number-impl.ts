import { Msg } from "../../common/msg";
import { IProgress } from "../i-progress";
import { LogService } from "../log.service";

export class BigNumberImpl implements IProgress {
  constructor() {}

  private logger: LogService = new LogService();

  //_bigNumberStart: number = 6791;
  _bigNumberStart: number = 1200;

  getNextCounter(info: Msg, delta: number): number {
    this.debug(info);
    this.logger.debug("delta:" + delta);

    let result = Math.floor(
      (1 - Math.min(info.deltaSum + delta, 100) / 100) * this._bigNumberStart
    );
    this.logger.debug("result=" + result);

    return result;
  }

  getResetCounter(): number {
    return this._bigNumberStart;
  }

  next(info: Msg): Msg {
    this.logger.debug("impl_bigNumber");
    let delta = Math.floor(Math.random() * 30) + 1;
    let deltaSumOld = info.deltaSum;

    let counter = this.getNextCounter(info, delta);
    return {
      value: delta,
      info: delta.toString(),
      counter: counter,
      deltaSum: deltaSumOld + delta,
    };
  }

  reset(info: Msg) {
    this.logger.debug("reset");
    info.value = 0;
    info.info = "0";
    info.counter = this.getResetCounter();
    info.deltaSum = 0;
  }

  debug(info: Msg) {
    this.logger.debug("val=" + info.value);
    this.logger.debug("info=" + info.info);
    this.logger.debug("counter=" + info.counter);
    this.logger.debug("deltaSum=" + info.deltaSum);
  }
}
