import { Injectable } from "@angular/core";
import { DataCounter } from "./data-counter";
import { IBackOffice } from "./iback-office";

@Injectable({
  providedIn: "root",
})
export class BackOfficeService implements IBackOffice {
  constructor() {
    this.dataCounter = new DataCounter();
  }

  dataCounter: DataCounter;

  getValue(): DataCounter {
    return this.dataCounter;
  }
}
