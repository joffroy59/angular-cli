import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { PrimengProgressBarComponent } from "./primeng-progress-bar/primeng-progress-bar.component";
import { DemoNgflexComponent } from "./demo-ngflex/demo-ngflex.component";
import { DemoPrimengButtonComponent } from "./demo-primeng-button/demo-primeng-button.component";
import { DemoPrimengProgressBarComponent } from "./demo-primeng-progress-bar/demo-primeng-progress-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    PrimengProgressBarComponent,
    DemoNgflexComponent,
    DemoPrimengButtonComponent,
    DemoPrimengProgressBarComponent,
  ],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
