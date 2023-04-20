import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProgressService {
  constructor() {}

  _impl: any;
  info: string = "";
  value: number = 0;

  setType(type: string) {
    this._impl = this.impl_ramdon_30;
    console.log("TODO set type to " + type);

    switch (type) {
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
    return this.value;
  }

  tick(): void {
    this._impl();
  }

  geInfo(): string {
    return this.info;
  }

  reset() {
    this.value = 0;
    this.info = "0";
  }

  impl_ramdon_x(factor: number): void {
    console.log("impl_ramdon_" + factor);
    let value = Math.floor(Math.random() * factor) + 1;
    this.info = value.toString();
    this.value = value;
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
    console.log("impl_bigNumber");
    let value = Math.floor(Math.random() * 100) + 1;
    this.info = (value * 10).toString();
    this.value = value;
  }
}
