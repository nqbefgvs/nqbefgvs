import {NgModule} from "@angular/core";
import {MyChartsPage} from "./my-charts.page";
import {SharedModule} from "../shared/shared.module";
import {NgxEchartsModule} from "ngx-echarts";
import {ChartsNavComponent} from "./charts-nav/charts-nav.component";
import {AgricultureProvideComponent} from "./agriculture-provide/agriculture-provide.component";
import {TaxStructureComponent} from "./tax-structure/tax-structure.component";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    MyChartsPage,
    ChartsNavComponent,
    AgricultureProvideComponent,
    TaxStructureComponent
  ],
  imports: [
    SharedModule,
    NgxEchartsModule.forChild(),
    AppRoutingModule
  ]
})
export class MyChartsModule { }
