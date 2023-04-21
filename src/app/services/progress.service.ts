import { Injectable } from "@angular/core";

interface Element {
  value: number;
  info: string;
  counter: number;
  deltaSum: number;
}

@Injectable({
  providedIn: "root",
})
export class ProgressService {
  constructor() {
    this.element = {
      value: 0,
      info: "",
      counter: this._bigNumberStart,
      deltaSum: 0,
    };
  }

  _impl: any;
  element: Element;

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
    return this.element.value;
  }

  tick(): void {
    this._impl();
  }

  geInfo(): string {
    return this.element.info;
  }

  getCounter(): number {
    return this.element.counter;
  }

  reset() {
    console.log("reset");
    this.element.value = 0;
    this.element.info = "0";
    if (this.serviceType == "bigNumber") {
      this.element.counter = this._bigNumberStart;
    } else {
      this.element.counter = 0;
    }
  }

  impl_ramdon_x(factor: number): void {
    console.log("impl_ramdon_" + factor);
    let value = Math.floor(Math.random() * factor) + 1;
    let deltaSumOld = this.element.deltaSum;
    this.element = {
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

  //_bigNumberStart: number = 6791;
  _bigNumberStart: number = 1200;
  impl_bigNumber(): void {
    console.log("impl_bigNumber");
    let delta = Math.floor(Math.random() * 30) + 1;
    let deltaSumOld = this.element.deltaSum;

    this.element = {
      value: delta,
      info: delta.toString(),
      counter: this.getNextCounter(delta),
      deltaSum: deltaSumOld + delta,
    };
  }

  getNextCounter(delta: number): number {
    this.log(this.element);
    console.log("delta:" + delta);

    let tmp = this.element.deltaSum + delta;
    console.log("this.element.deltaSum + delta=" + tmp);

    console.log(
      "Math.min(this.element.deltaSum + delta, 100)" + ":" + Math.min(tmp, 100)
    );
    console.log(
      "Math.min(this.element.deltaSum + delta, 100)/100" +
        ":" +
        Math.min(tmp, 100) / 100
    );
    console.log(
      "(1 - (Math.min(this.element.deltaSum + delta, 100)/100))" +
        ":" +
        (1 - Math.min(tmp, 100) / 100)
    );
    console.log(
      "(1 - (Math.min(this.element.deltaSum + delta, 100)/100))  * this._bigNumberStart" +
        ":" +
        (1 - Math.min(tmp, 100) / 100) * this._bigNumberStart
    );
    let result = (1 - Math.min(tmp, 100) / 100) * this._bigNumberStart;
    console.log("result=" + result);

    return result;
  }

  log(element: Element) {
    console.log("val=" + this.element.value);
    console.log("info=" + this.element.info);
    console.log("counter=" + this.element.counter);
    console.log("deltaSum=" + this.element.deltaSum);
  }
}
