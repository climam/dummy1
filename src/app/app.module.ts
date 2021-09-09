import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MicrofrontendsModule } from "./microfrontends/microfrontends.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MicrofrontendsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
