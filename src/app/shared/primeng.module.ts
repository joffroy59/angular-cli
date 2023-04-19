import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ProgressBarModule } from "primeng/progressbar";
// For dynamic progressbar demo
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [],
  exports: [ButtonModule, ProgressBarModule, ToastModule],
  providers: [],
  bootstrap: [],
})
export class PrimeNGModule {}
