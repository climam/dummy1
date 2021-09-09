import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  MicrofrontendsRoutingModule,
  RoutedComponents,
} from "./microfrontends-routing.module";

@NgModule({
  declarations: [RoutedComponents],
  imports: [CommonModule, HttpClientModule, MicrofrontendsRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MicrofrontendsModule {}
