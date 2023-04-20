import { Injectable } from "@angular/core";

interface Element {
  info: string;
  value: number;
  counter: number;
}

@Injectable({
  providedIn: "root",
})
export class ProgressService {
  constructor() {
    this.element = { info: "", value: 0, counter: this._bigNumberStart };
  }

  _impl: any;
  element: Element;

  serviceType: string = "random30";

  setType(type: string) {
    this.serviceType = type;
    this._impl = this.impl_ramdon_30;
    console.log("TODO set type to " + this.serviceType);

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
    if (this.serviceType == "bigNumber")
      this.element.info = this._bigNumberStart.toString();
    else this.element.info = "0";
    this.element.value = 0;
  }

  impl_ramdon_x(factor: number): void {
    console.log("impl_ramdon_" + factor);
    let value = Math.floor(Math.random() * factor) + 1;

    this.element = { info: value.toString(), value: value, counter: value };
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
  _bigNumberStart: number = 1000;
  impl_bigNumber(): void {
    console.log("impl_bigNumber");
    let rand = Math.floor(Math.random());
    let value = rand * 500 + 1;

    let count = this.element.counter;
    this.element = {
      info: value.toString(),
      value: value,
      counter: count - value,
    };
  }
}
