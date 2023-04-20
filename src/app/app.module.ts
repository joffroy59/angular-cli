import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { PrimengProgressBarComponent } from "./primeng/progress-bar/progress-bar.component";
import { DemoNgflexComponent } from "./demo/demo-ngflex/demo-ngflex.component";
import { DemoPrimengButtonComponent } from "./demo/demo-primeng-button/demo-primeng-button.component";
import { DemoPrimengProgressBarComponent } from "./demo/demo-primeng-progress-bar/demo-primeng-progress-bar.component";
import { DemoComponent } from './demo/demo.component';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
