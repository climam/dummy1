import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SettlementComponent } from "./components/settlement/settlement.component";

const routes: Routes = [{ path: "settlement", component: SettlementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicrofrontendsRoutingModule {}

export const RoutedComponents = [SettlementComponent];
