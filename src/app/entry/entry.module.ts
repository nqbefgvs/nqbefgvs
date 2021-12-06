import {NgModule} from "@angular/core";
import {EntryPage} from "./entry.page";
import {ItemComponent} from "./item/item.component";
import {ClientCommonModule} from "../client-common/client-common.module";

@NgModule({
  declarations: [
    EntryPage,
    ItemComponent
  ],
  imports: [
    ClientCommonModule
  ]
})
export class EntryModule { }
