import { Injectable } from "@angular/core";
import { Msg } from "./msg";
import { IProgress } from "./i-progress";
import { ProgressFactory } from "./impl/progress-factory";

@Injectable({
  providedIn: "root",
})
export class ProgressService {
  constructor() {
    this.msg = new Msg();
  }

  msg: Msg;

  serviceType: string = "random30";
  progressFactory: ProgressFactory = new ProgressFactory();
  progressImpl: IProgress;

  setType(type: string) {
    this.serviceType = type;
    this.progressImpl = this.progressFactory.get(this.serviceType);
    console.log("Set type to " + this.serviceType);
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
