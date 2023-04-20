import { Component, OnInit, Input } from "@angular/core";
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

  value: number = 0;
  full: boolean = false;

  getProgress(): number {
    return this.progressService.getProgress();
  }

  toString(): string {
    let res = "";
    if (this.title1 != "") res += this.title1 + "-";
    if (this.title2 != "") res += this.title2 + "-";
    if (this.title3 != "") res += this.title3 + "-";
    return "[" + res.slice(0, -1) + "]";
  }

  ngOnInit() {
    this.progressService = new ProgressService();
    this.progressService.setType(this.serviceType);

    let interval = setInterval(() => {
      if (!this.full) this.value = this.value + this.getProgress() + 1;
      console.log(this.toString() + "=" + this.value);
      if (this.value > 100) {
        this.value = 100;
        this.full = true;
      } else if (this.value == 100) {
        this.value = 0;
        this.full = false;
      }
    }, 2000);
  }
}
