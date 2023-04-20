import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { ProgressBarDemoComponent } from './progress-bar-demo/progress-bar-demo.component';
import { DemoProgressBarComponent } from './demo-progress-bar/demo-progress-bar.component';
import { DemoNgflexComponent } from './demo-ngflex/demo-ngflex.component';
import { DemoPrimengButtonComponent } from './demo-primeng-button/demo-primeng-button.component';

@NgModule({
  declarations: [AppComponent, ProgressBarDemoComponent, DemoProgressBarComponent, DemoNgflexComponent, DemoPrimengButtonComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
