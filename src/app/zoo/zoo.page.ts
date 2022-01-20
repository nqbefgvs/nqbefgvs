import {Component} from "@angular/core";

@Component({
  selector: 'zoo',
  templateUrl: 'zoo.page.html',
  styleUrls: ['zoo.page.scss']
})
export class ZooPage {

  timeline1Option: any = {
    title: '新疆相关部分事件记录',
    lines: [
      {
        title: '西方舆论',
        lineId: 0,
        color: '#1ba1d5'
      },
      {
        title: '西方制裁',
        lineId: 1,
        color: '#1e9eb3'
      },
      {
        title: '中方应对',
        lineId: 2,
        color: 'rgba(222, 41, 16, 0.9)'
      },
      {
        title: '暴恐事件',
        lineId: 3,
        color: '#161823'
      }
    ],
    items: [
      {
        title: '2009/7/5，年乌鲁木齐七五事件',
        line: 3,
        time: 0
      },
      {
        title: '2014/7/28，年莎车县暴恐案件',
        line: 3,
        time: 1
      },
      {
        title: '2019/11/16，《纽约时报》公布部分新疆政府文件，跨度从2014到2017年',
        line: 0,
        time: 2
      },
      {
        title: '2020/5/30，美国对33家中国公司制裁',
        line: 1,
        time: 3
      },
      {
        title: '2020/6/18，特朗普签署《维吾尔人权政策法》',
        line: 1,
        time: 4
      },
      {
        title: '2020/12/15，BBC发表对新疆“强迫劳动”的报道',
        line: 0,
        time: 5
      },
      {
        title: '2020/12/29，中国否认BBC关于新疆“强迫劳动”的报道',
        line: 2,
        time: 5
      },
      {
        title: '2021/1/12，英国切断与新疆的供应链关系',
        line: 1,
        time: 6
      },
      {
        title: '2021/3/24，H&M和nike拒绝购买中国棉花',
        line: 1,
        time: 7
      },
      {
        title: '2021/3/24，中国抵制H&M和nike，前后几天又制裁了英、美、加拿大政客及实体',
        line: 2,
        time: 7
      },
      {
        title: '2021/6/10，中国通过反制裁法',
        line: 2,
        time: 8
      },
      {
        title: '2021/11/15，欧盟拟禁止“强迫劳动”产品',
        line: 1,
        time: 9
      },
      {
        title: '2021/12/23，拜登签署法案禁止从新疆进口“强迫劳动”产品，英特尔在致供应商的信中要求不从新疆采购产品和劳动力',
        line: 1,
        time: 10
      },
      {
        title: '2021/12/23，中国网友抨击英特尔，后者悄悄撤回新疆相关声明',
        line: 2,
        time: 10
      }
    ]
  }

  timeline2Option: any = {
    title: '2022年初哈萨克斯坦暴乱记录',
    lines: [
      {
        title: '国外反应',
        lineId: 0
      },
      {
        title: '政府情况',
        lineId: 1
      },
      {
        title: '国民情况',
        lineId: 2
      }
    ],
    items: [
    ]
  }
}
