import {Component} from "@angular/core";

@Component({
  selector: 'zoo',
  templateUrl: 'zoo.page.html',
  styleUrls: ['zoo.page.scss']
})
export class ZooPage {

  timeline1Option: any = {
    title: '西藏近年事件记录',
    lines: [
      {
        title: '西方舆论',
        lineId: 0,
        color: ''
      },
      {
        title: '西方制裁',
        lineId: 1,
        color: ''
      },
      {
        title: '中方应对',
        lineId: 2,
        color: ''
      },
      {
        title: '暴恐事件',
        lineId: 3,
        color: ''
      }
    ],
    items: [
      {
        title: '2014年莎车县暴恐案件',
        line: 3,
        time: 0
      },
      {
        title: '2019年《纽约时报》公布部分新疆政府文件',
        line: 0,
        time: 1
      },
      {
        title: '2021年H&M和nike拒绝购买中国棉花',
        line: 1,
        time: 2
      },
      {
        title: '中国发动舆论抵制H&M和nike',
        line: 2,
        time: 2
      }
    ]
  }
}
