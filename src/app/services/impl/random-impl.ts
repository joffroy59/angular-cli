import { Msg } from "../msg";

export class RandomImpl {
  factor: number;
  constructor(factor: number) {
    this.factor = factor;
  }

  next(info: Msg): Msg {
    console.log("impl_ramdon_" + this.factor);
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
    console.log("reset");
    info.value = 0;
    info.info = "0";
    info.counter = 0;
    info.deltaSum = 0;
  }
}
