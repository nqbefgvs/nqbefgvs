import {AfterViewInit, Component, ViewChild} from "@angular/core";

@Component({
  selector: 'charts-nav',
  templateUrl: 'charts-nav.component.html',
  styleUrls: ['charts-nav.component.scss']
})
export class ChartsNavComponent implements AfterViewInit {

  @ViewChild('myUl') myUl: any

  public activated: number = 0

  ngAfterViewInit(): void {
    // this.myUl.nativeElement.children[this.activated].classList.add('activated')
  }

  activate(event: MouseEvent): void {

  }

}
