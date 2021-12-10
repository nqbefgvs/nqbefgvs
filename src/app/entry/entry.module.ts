import {NgModule} from "@angular/core";
import {EntryPage} from "./entry.page";
import {ItemComponent} from "./item/item.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    EntryPage,
    ItemComponent
  ],
  imports: [
    SharedModule
  ]
})
export class EntryModule { }
