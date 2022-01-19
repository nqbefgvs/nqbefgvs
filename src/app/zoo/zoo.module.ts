import {NgModule} from "@angular/core";
import {ZooPage} from "./zoo.page";
import {SharedModule} from "../shared/shared.module";
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineItemComponent } from './components/timeline-item/timeline-item.component';
import {ColorsDirective} from "./directives/colors.directive";
import { CommonModule } from "@angular/common";
import { TimelineLineComponent } from "./components/timeline-line/timeline-line.component";

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  declarations: [
    ZooPage,
    ColorsDirective,
    TimelineComponent,
    TimelineItemComponent,
    TimelineLineComponent
  ]
})
export class ZooModule { }
