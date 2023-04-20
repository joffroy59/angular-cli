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
    if (type == "random10") {
      this._impl = this.impl_ramdon_10;
    } else if (type == "random30") {
      this._impl = this.impl_ramdon_30;
    } else if (type == "random50") {
      this._impl = this.impl_ramdon_50;
    } else if (type == "random100") {
      this._impl = this.impl_ramdon_100;
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
}
