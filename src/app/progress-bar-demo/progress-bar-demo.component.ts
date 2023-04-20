import { Component, OnInit, Input } from "@angular/core";
import { ProgressService } from "../services/progress.service";

@Component({
  selector: "app-progress-bar-demo",
  templateUrl: "./progress-bar-demo.component.html",
  styleUrls: ["./progress-bar-demo.component.css"],
})
export class ProgressBarDemoComponent implements OnInit {
  constructor(private progressService: ProgressService) {}

  @Input() title1: string;
  @Input() title2: string;
  @Input() title3: string;

  title = "Angular CLI Template";
  value: number = 0;

  getProgress(): number {
    return this.progressService.getProgress();
  }

  ngOnInit() {
    let interval = setInterval(() => {
      this.value = this.value + this.getProgress() + 1;
      if (this.value >= 100) {
        this.value = 0;
      }
    }, 2000);
  }
}
