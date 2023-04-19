import { Component, OnInit } from "@angular/core";
import { ProgressService } from "./progress.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private progressService: ProgressService) {}

  title = "Angular CLI Template";
  value1: number = 0;
  value2: number = 0;

  getProgress(): number {
    return this.progressService.getProgress();
  }

  ngOnInit() {
    let interval = setInterval(() => {
      this.value1 = this.value1 + Math.floor(Math.random() * 10) + 1;
      this.value2 = this.value2 + this.getProgress() + 1;
      if (this.value1 >= 100) {
        this.value1 = 0;
      }
      if (this.value2 >= 100) {
        this.value2 = 0;
      }
    }, 2000);
  }
}
