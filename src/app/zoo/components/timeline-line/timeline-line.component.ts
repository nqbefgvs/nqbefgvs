import { AfterViewInit, Component, Input, ViewChild } from "@angular/core";
import { Line, LinePosition } from "../../model";

@Component({
    selector: 'timeline-line',
    templateUrl: './timeline-line.component.html',
    styleUrls: ['./timeline-line.component.scss']
  })
export class TimelineLineComponent implements AfterViewInit {

    @Input()
    public line: Line

    @Input()
    public position: LinePosition

    @ViewChild('header')
    public header: any

    @ViewChild('line')
    public lineElem: any

    ngAfterViewInit(): void {
        this.initLineElem()
    }

    initLineElem() {
        const header = this.header.nativeElement
        header.style.position = 'absolute'
        header.style.top = this.position.top + 'px'
        header.style.left = this.position.left - (header.clientWidth/2) + 'px' 
    }
}