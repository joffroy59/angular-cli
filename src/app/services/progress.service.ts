import { Injectable } from "@angular/core";
import { Info } from "./info";
import { IProgress } from "./i-progress";
import { BigNumberImpl } from "./impl/big-number-impl";
import { RandomImpl } from "./impl/random-impl";

@Injectable({
  providedIn: "root",
})
export class ProgressService {
  constructor() {
    this.bigNumberImpl = new BigNumberImpl();
    this.info = {
      value: 0,
      info: "",
      counter: 0,
      deltaSum: 0,
    };
  }

  info: Info;

  bigNumberImpl: BigNumberImpl;
  ramdon10Impl: IProgress = new RandomImpl(10);
  ramdon30Impl: IProgress = new RandomImpl(30);
  ramdon50Impl: IProgress = new RandomImpl(50);
  ramdon100Impl: IProgress = new RandomImpl(100);

  progressImpl: IProgress;

  serviceType: string = "random30";

  setType(type: string) {
    this.serviceType = type;
    this.progressImpl = this.ramdon30Impl;
    console.log("Set type to " + this.serviceType);

    switch (this.serviceType) {
      case "random10":
        this.progressImpl = this.ramdon10Impl;
        break;
      case "random30":
        this.progressImpl = this.ramdon30Impl;
        break;
      case "random50":
        this.progressImpl = this.ramdon50Impl;
        break;
      case "random100":
        this.progressImpl = this.ramdon100Impl;
        break;
      case "bigNumber":
        this.progressImpl = this.bigNumberImpl;
        break;
    }
  }

  getProgress(): number {
    return this.info.value;
  }

  tick(): void {
    this.info = this.progressImpl.next(this.info);
  }

  geInfo(): string {
    return this.info.info;
  }

  getCounter(): number {
    return this.info.counter;
  }

  reset() {
    this.progressImpl.reset(this.info);
  }
}
