import { IProgress } from "../i-progress";
import { BigNumberImpl } from "./big-number-impl";
import { RandomImpl } from "./random-impl";

export class ProgressFactory {
  get(serviceType: string): IProgress {
    let progressImpl: IProgress;
    switch (serviceType) {
      case "random10":
        progressImpl = new RandomImpl(10);
        break;
      case "random30":
        progressImpl = new RandomImpl(30);
        break;
      case "random50":
        progressImpl = new RandomImpl(50);
        break;
      case "random100":
        progressImpl = new RandomImpl(100);
        break;
      case "bigNumber":
        progressImpl = new BigNumberImpl();
        break;
      default:
        progressImpl = new RandomImpl(30);
        break;
    }
    return progressImpl;
  }
}
