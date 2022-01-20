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

    @Input()
    public length: number

    @ViewChild('header')
    public header: any

    @ViewChild('lineElem')
    public lineElem: any

    ngAfterViewInit(): void {
        this.initHeader()
        this.initLineElem()
    }

    initHeader(): void {
        const header = this.header.nativeElement
        header.style.position = 'absolute'
        header.style.top = this.position.top + 'px'
        header.style.left = this.position.left - (header.clientWidth/2) + 'px' 
        header.style.borderColor = this.line.color
    }

    initLineElem(): void {
        const header = this.header.nativeElement
        const line = this.lineElem.nativeElement
        line.style.position = 'absolute'
        line.style.top = (header.scrollHeight + header.clientHeight) / 2 + 'px'
        line.style.left = (header.scrollWidth) / 2 + 'px'
        setTimeout(() => {
            line.style.height = (this.length - 100 || 500) + 'px'
        })
        line.style.color = this.line.color
    }
}