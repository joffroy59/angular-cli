import { Injectable } from "@angular/core";
import { IMsg } from "./i-msg";
import { IProgress } from "./i-progress";
import { BigNumberImpl } from "./impl/big-number-impl";
import { RandomImpl } from "./impl/random-impl";

@Injectable({
  providedIn: "root",
})
export class ProgressService {
  constructor() {
    this.msg = {
      value: 0,
      info: "",
      counter: 0,
      deltaSum: 0,
    };
  }

  msg: IMsg;

  progressImpl: IProgress;

  serviceType: string = "random30";

  setType(type: string) {
    this.serviceType = type;
    console.log("Set type to " + this.serviceType);
    switch (this.serviceType) {
      case "random10":
        this.progressImpl = new RandomImpl(10);
        break;
      case "random30":
        this.progressImpl = new RandomImpl(30);
        break;
      case "random50":
        this.progressImpl = new RandomImpl(50);
        break;
      case "random100":
        this.progressImpl = new RandomImpl(100);
        break;
      case "bigNumber":
        this.progressImpl = new BigNumberImpl();
        break;
      default:
        this.progressImpl = new RandomImpl(30);
        break;
    }
  }

  getProgress(): number {
    return this.msg.value;
  }

  tick(): void {
    this.msg = this.progressImpl.next(this.msg);
  }

  geInfo(): string {
    return this.msg.info;
  }

  getCounter(): number {
    return this.msg.counter;
  }

  reset() {
    this.progressImpl.reset(this.msg);
  }
}
