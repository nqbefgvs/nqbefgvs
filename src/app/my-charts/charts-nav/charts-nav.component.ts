import {AfterViewInit, Component, OnChanges, ViewChild} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'charts-nav',
  templateUrl: 'charts-nav.component.html',
  styleUrls: ['charts-nav.component.scss']
})
export class ChartsNavComponent {

  @ViewChild('myScrollContainer') myScrollContainer: any

  @ViewChild('myUl') myUl: any

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.autoScrollWhenRoute()
      }
    })
  }

  wheelScrollContainer(event: WheelEvent): void {
    event.preventDefault()
    this.myScrollContainer.nativeElement.scrollBy({ left: +event.deltaY })
  }

  autoScrollWhenRoute(): void {
    setTimeout(() => {
      const container = this.myScrollContainer.nativeElement
      const liList = [...this.myUl.nativeElement.children]
      const curUrl = this.router.url.split('/').pop()
      liList.forEach((elem: HTMLLIElement) => {
        if (elem.children[0].getAttribute('routerLink') === curUrl) {
          container.scrollTo({ left: elem.offsetLeft - container.clientWidth*0.5 + elem.clientWidth*0.5, behavior: 'smooth' })
          elem.classList.add('activated')
        } else {
          elem.classList.remove('activated')
        }
      })
    }, 0)
  }

}
