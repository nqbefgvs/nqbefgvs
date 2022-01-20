import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Item, ItemPosition } from '../../model';

@Component({
  selector: 'timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements AfterViewInit {

  @Input()
  public item: Item

  @Input()
  public position: ItemPosition

  @Input()
  public color: string

  @ViewChild('elem')
  public elem: any

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.initElemPosition()
  }

  initElemPosition(): void {
    const elem = this.elem.nativeElement
    elem.style.position = 'absolute'
    elem.style.top = this.position.top + 'px'
    elem.style.left = this.position.left - (elem.clientWidth/2) + 2 + 'px' 
    elem.style.borderColor = this.color
  }

}
