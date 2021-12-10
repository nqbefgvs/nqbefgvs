import {NgModule} from "@angular/core";
import {BookShelfPage} from "./book-shelf.page";
import {SharedModule} from "../shared/shared.module";
import {BookShelfSideBarComponent} from "./book-shelf-side-bar/book-shelf-side-bar.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  declarations: [
    BookShelfPage,
    BookShelfSideBarComponent
  ]
})
export class BookShelfModule { }
