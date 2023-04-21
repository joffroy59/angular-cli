import { Msg } from "../msg";
import { IProgress } from "../i-progress";

export class BigNumberImpl implements IProgress {
  //_bigNumberStart: number = 6791;
  _bigNumberStart: number = 1200;

  getNextCounter(info: Msg, delta: number): number {
    this.log(info);
    console.log("delta:" + delta);

    let result = Math.floor(
      (1 - Math.min(info.deltaSum + delta, 100) / 100) * this._bigNumberStart
    );
    console.log("result=" + result);

    return result;
  }

  getResetCounter(): number {
    return this._bigNumberStart;
  }

  next(info: Msg): Msg {
    console.log("impl_bigNumber");
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
    console.log("reset");
    info.value = 0;
    info.info = "0";
    info.counter = this.getResetCounter();
    info.deltaSum = 0;
  }

  log(info: Msg) {
    console.log("val=" + info.value);
    console.log("info=" + info.info);
    console.log("counter=" + info.counter);
    console.log("deltaSum=" + info.deltaSum);
  }
}
