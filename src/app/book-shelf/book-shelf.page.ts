import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BookMenu} from "./book-menu";
import {Router} from "@angular/router";

@Component({
  selector: 'book-shelf',
  templateUrl: 'book-shelf.page.html',
  styleUrls: ['book-shelf.page.scss']
})
export class BookShelfPage {

  bookMenu: Array<BookMenu> = []

  flattenedMenu: Array<string> = []

  filteredMenu: Array<string> = []

  filterName: string = ''

  constructor(private http: HttpClient, private router: Router) {
    this.http.get('http://47.94.235.83/api/file/getBookMenu', { responseType: "text" })
      .subscribe((res) => { this.bookMenu = JSON.parse(res); this.filteredMenu = this.flattenedMenu = this.flattenMenu(this.bookMenu) })
  }

  flattenMenu (nestedBookMenu: Array<BookMenu>): Array<string> {
    let res: Array<string> = []
    for (let menu of nestedBookMenu) {
      if (menu.subMenu.length > 0) {
        res = res.concat(this.flattenMenu(menu.subMenu))
      }
      res = res.concat(menu.files)
    }
    return res
  }

  home () {
    this.router.navigateByUrl('')
  }

  filter () {
    this.filteredMenu = this.flattenedMenu.filter(value => value.includes(this.filterName))
  }
}
