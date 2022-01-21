import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { Item, ItemPosition, Line, LinePosition } from '../../model';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input()
  public timelineOption: any

  @ViewChild('title')
  public title: any

  @ViewChild('container')
  public container: any
  
  public expanded = false

  public itemHeight = 130

  public totalHeight: number

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.initTitle()
  }

  initTitle(): void {
    const title = this.title.nativeElement
    title.style.borderColor = this.timelineOption.title.borderColor
    title.style.backgroundColor = this.timelineOption.title.backgroundColor
  }

  calculateLinePosition(line: Line): LinePosition {
    return {
      top: 0, 
      left: (0.5 + line.lineId) * (this.title.nativeElement.clientWidth / this.timelineOption.lines.length)
    }
  }

  calculateItemPosition(item: Item): ItemPosition {
    return {
      top: item.time * this.itemHeight + 100,
      left: (0.5 + item.line) * (this.title.nativeElement.clientWidth / this.timelineOption.lines.length)
    }
  }

  colorByLine(lineId: number): string {
    return this.timelineOption.lines.find(line => line.lineId === lineId).color
  }

  switchExpanded(): void {
    this.expanded = !this.expanded

    if (this.expanded) {
      setTimeout(() => {
        const container = this.container.nativeElement
        const maxTime = Math.max(...this.timelineOption.items.map(item => +item.time))
        this.totalHeight = maxTime * this.itemHeight + 300
        container.style.height = maxTime * this.itemHeight + 300 + 'px'
      })
    }
  }

}
