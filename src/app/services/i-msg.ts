export class IMsg {
  value: number;
  info: string;
  counter: number;
  deltaSum: number;

  constructor() {
    this.value = 0;
    this.info = "";
    this.counter = 0;
    this.deltaSum = 0;
  }
}
