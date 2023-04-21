import { Component, OnInit, Input } from "@angular/core";
import { Msg } from "src/app/common/msg";
import { ProgressService } from "../../services/progress.service";

@Component({
  selector: "app-primeng-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"],
})
export class PrimengProgressBarComponent implements OnInit {
  constructor() {}

  progressService: ProgressService;

  @Input() title1: string = "";
  @Input() title2: string = "";
  @Input() title3: string = "";

  @Input() serviceType: string = "";

  fullfill: boolean = false;
  msg: Msg = new Msg();

  getProgress(): number {
    this.progressService.tick();
    this.resetInfo();
    return this.progressService.getProgress();
  }

  resetInfo(): void {
    this.msg.info = this.progressService.geInfo();
    this.msg.counter = this.progressService.getCounter();
    this.msg.value = 0;
  }

  toString(): string {
    let res = "";
    if (this.title1 != "") res += this.title1 + "-";
    if (this.title2 != "") res += this.title2 + "-";
    if (this.title3 != "") res += this.title3 + "-";
    return "[" + res.slice(0, -1) + "]";
  }

  init(): void {
    this.progressService = new ProgressService();
    this.progressService.setType(this.serviceType);
    this.msg.info = this.progressService.geInfo();
    this.msg.counter = this.progressService.getCounter();
  }

  checkLimit(): void {
    let progressBarMax = 100;
    if (this.msg.value > progressBarMax) {
      this.msg.value = progressBarMax;
      this.fullfill = true;
    } else if (this.msg.value == progressBarMax) {
      this.progressService.reset();
      this.resetInfo();
      this.msg.value = 0;
      this.fullfill = false;
    }
  }

  ngOnInit() {
    this.init();

    setInterval(() => {
      if (!this.fullfill) this.msg.value = this.msg.value + this.getProgress();
      console.log(this.toString() + "=" + this.msg.value);
      this.checkLimit();
    }, 2000);
    //}, 4000);
  }
}
