import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProgressService {
  constructor() {}

  getProgress(): number {
    return Math.floor(Math.random() * 10);
  }
}
