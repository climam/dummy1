import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { MicrofrontendLoaderService } from "../../services/microfrontend-loader.service";

@Component({
  selector: "app-settlement",
  templateUrl: "./settlement.component.html",
  styleUrls: ["./settlement.component.scss"],
})
export class SettlementComponent implements OnInit {
  loaded = of(false);
  constructor(private MicrofrontendLoaderService: MicrofrontendLoaderService) {}

  ngOnInit(): void {
    this.loaded = this.MicrofrontendLoaderService.load({
      name: "settlement",
    });
  }
}
