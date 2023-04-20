import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { ProgressBarDemoComponent } from './progress-bar-demo/progress-bar-demo.component';

@NgModule({
  declarations: [AppComponent, ProgressBarDemoComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
