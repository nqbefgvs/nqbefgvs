import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'entry-page',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss']
})
export class EntryPage {

  constructor(private router: Router) {
  }

  route (url: string) {
    this.router.navigateByUrl(url)
  }
}
