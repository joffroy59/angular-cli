import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { PrimengProgressBarComponent } from "./primeng/progress-bar/progress-bar.component";
import { DemoNgflexComponent } from "./demo/ngflex/ngflex.component";
import { DemoPrimengButtonComponent } from "./demo/primeng-button/primeng-button.component";
import { DemoPrimengProgressBarComponent } from "./demo/primeng-progress-bar/primeng-progress-bar.component";
import { DemoComponent } from "./demo/demo.component";

import { LogService } from "./services/log.service";

@NgModule({
  declarations: [
    AppComponent,
    PrimengProgressBarComponent,
    DemoNgflexComponent,
    DemoPrimengButtonComponent,
    DemoPrimengProgressBarComponent,
    DemoComponent,
  ],
  imports: [BrowserModule, SharedModule],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
