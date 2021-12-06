import {Component, Input} from "@angular/core";
import {BookMenu} from "../book-menu";

@Component({
  selector: 'book-shelf-side-bar',
  templateUrl: 'book-shelf-side-bar.component.html',
  styleUrls: ['book-shelf-side-bar.component.scss']
})
export class BookShelfSideBarComponent {
  @Input() width: number = 1
  @Input() bookMenu: Array<BookMenu> = []
  @Input() depth: number = 1

  stretched: Array<boolean> = []

  stretch (index: number) {
    this.stretched[index] = !this.stretched[index]??true
  }
}
