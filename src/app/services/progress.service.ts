import { Injectable } from "@angular/core";
import { Info } from "./info";
import { BigNumberImpl } from "./big-number-impl";

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

  _impl: any;
  info: Info;

  bigNumberImpl: BigNumberImpl;

  serviceType: string = "random30";

  setType(type: string) {
    this.serviceType = type;
    this._impl = this.impl_ramdon_30;
    console.log("Set type to " + this.serviceType);

    switch (this.serviceType) {
      case "random10":
        this._impl = this.impl_ramdon_10;
        break;
      case "random30":
        this._impl = this.impl_ramdon_30;
        break;
      case "random50":
        this._impl = this.impl_ramdon_50;
        break;
      case "random100":
        this._impl = this.impl_ramdon_100;
        break;
      case "bigNumber":
        this._impl = this.impl_bigNumber;
        break;
    }
  }

  getProgress(): number {
    return this.info.value;
  }

  tick(): void {
    this._impl();
  }

  geInfo(): string {
    return this.info.info;
  }

  getCounter(): number {
    return this.info.counter;
  }

  reset() {
    console.log("reset");
    this.info.value = 0;
    this.info.info = "0";
    if (this.serviceType == "bigNumber") {
      this.info.counter = this.bigNumberImpl.getResetCounter();
    } else {
      this.info.counter = 0;
    }
    this.info.deltaSum = 0;
  }

  impl_ramdon_x(factor: number): void {
    console.log("impl_ramdon_" + factor);
    let value = Math.floor(Math.random() * factor) + 1;
    let deltaSumOld = this.info.deltaSum;
    this.info = {
      info: value.toString(),
      value: value,
      counter: value,
      deltaSum: deltaSumOld + value,
    };
  }

  impl_ramdon_10(): void {
    this.impl_ramdon_x(10);
  }
  impl_ramdon_30(): void {
    this.impl_ramdon_x(30);
  }
  impl_ramdon_50(): void {
    this.impl_ramdon_x(50);
  }
  impl_ramdon_100(): void {
    this.impl_ramdon_x(100);
  }

  impl_bigNumber(): void {
    this.info = this.bigNumberImpl.next(this.info);
  }
}
