import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProgressService {
  constructor() {}

  _impl;

  setType(type) {
    this._impl = this.impl_ramdon_30;
    console.log("TODO set type to " + type);
    if (type == "random") {
      this._impl = this.impl_ramdon_10;
    }
  }

  getProgress(): number {
    return this._impl();
  }

  impl_ramdon_10(): number {
    console.log("impl_ramdon_10");
    return Math.floor(Math.random() * 10);
  }
  impl_ramdon_30(): number {
    console.log("impl_ramdon_30");
    return Math.floor(Math.random() * 30);
  }
  impl_ramdon_50(): number {
    console.log("impl_ramdon_50");
    return Math.floor(Math.random() * 50);
  }
  impl_ramdon_100(): number {
    console.log("impl_ramdon_100");
    return Math.floor(Math.random() * 100);
  }
}
