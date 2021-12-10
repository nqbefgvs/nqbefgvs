import {NgModule} from "@angular/core";
import {ZooPage} from "./zoo.page";
import {SharedModule} from "../shared/shared.module";
import {ShofarDirective} from "./directives/shofar.directive";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ZooPage,
    ShofarDirective
  ]
})
export class ZooModule { }
