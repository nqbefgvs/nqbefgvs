import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { Item, ItemPosition, Line, LinePosition } from '../../model';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input()
  public timelineOption: any

  public expanded = false

  @ViewChild('title')
  public title: any

  constructor() { }

  ngOnInit(): void {

  }

  calculateLinePosition(line: Line): LinePosition {
    return {
      top: 0, 
      left: (0.5 + line.lineId) * (this.title.nativeElement.clientWidth / this.timelineOption.lines.length)
    }
  }

  calculateItemPosition(item: Item): ItemPosition {
    return {
      top: item.time * 100 + 50,
      left: (0.5 + item.line) * (this.title.nativeElement.clientWidth / this.timelineOption.lines.length)
    }
  }

}
