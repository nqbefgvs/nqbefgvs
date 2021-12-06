import {NgModule} from "@angular/core";
import {BookShelfPage} from "./book-shelf.page";
import {ClientCommonModule} from "../client-common/client-common.module";
import {BookShelfSideBarComponent} from "./book-shelf-side-bar/book-shelf-side-bar.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    ClientCommonModule,
    CommonModule
  ],
  declarations: [
    BookShelfPage,
    BookShelfSideBarComponent
  ]
})
export class BookShelfModule { }
