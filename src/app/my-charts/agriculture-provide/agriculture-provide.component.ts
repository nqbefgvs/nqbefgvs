import {Component} from "@angular/core";

@Component({
  selector: 'agriculture-provide',
  templateUrl: 'agriculture-provide.component.html',
  styleUrls: ['agriculture-provide.component.scss']
})
export class AgricultureProvideComponent {
  chart1Option: any = {
    title: {
      text: '1. 2020年全年粮食生产及进口量(单位: 万吨)',
      subtext: '以质量作为计量单位, 数据分别来自于国家统计局和海关总署官网',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: '20%'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: [
          { value: 66949, name: '生产' },
          { value: 14262, name: '进口' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  chart2Option: any = {
    title: {
      text: '2. 2020年全年主要从各国进口谷物量(单位: 万元)',
      subtext: '以人民币值作为计量单位,数据来自于海关总署官网',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: '20%'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: [
          { value: 248754, name: '缅甸' },
          { value: 126418, name: '巴基斯坦' },
          { value: 165938, name: '泰国' },
          { value: 313120, name: '越南' },
          { value: 821882, name: '欧盟' },
          { value: 713828, name: '法国' },
          { value: 1292303, name: '乌克兰' },
          { value: 133131, name: '阿根廷' },
          { value: 795398, name: '加拿大' },
          { value: 1688198, name: '美国' },
          { value: 565160, name: '澳大利亚' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  chart3Option: any = {
    title: {
      text: '3. 2020年主要粮食产物生产及进口值(单位: 万吨)',
      subtext: '以质量作为计量单位, 数据分别来自于国家统计局和海关总署官网',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['生产', '进口'],
      left: 'left'
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        // prettier-ignore
        data: ['小麦', '大麦', '玉米', '稻谷', '高粱', '大豆']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '生产',
        type: 'bar',
        data: [
          13425, undefined, 26066, 21185, undefined, 1960
        ],
        // markPoint: {
        //   data: [
        //     { type: 'max', name: 'Max' },
        //     { type: 'min', name: 'Min' }
        //   ]
        // },
        // markLine: {
        //   data: [{ type: 'average', name: 'Avg' }]
        // }
      },
      {
        name: '进口',
        type: 'bar',
        data: [
          838, 808, 1130, 294, 481, 10033
        ],
        // markPoint: {
        //   data: [
        //     { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
        //     { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
        //   ]
        // },
        // markLine: {
        //   data: [{ type: 'average', name: 'Avg' }]
        // }
      }
    ]
  }
}
