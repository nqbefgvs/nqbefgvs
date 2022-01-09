import {Component} from "@angular/core";

@Component({
  selector: 'tax-structure',
  templateUrl: 'tax-structure.component.html',
  styleUrls: ['tax-structure.component.scss']
})
export class TaxStructureComponent {
  chart1Option: any = {
    title: {
      text: '1. 我国2020年五种税收收入(单位: 亿元)',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '10%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '32',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 56791 + 12028 + 13914 + 620 - 13611 - 17 + 2564, name: '流转税' },
          { value: 36425 + 11568, name: '所得税' },
          { value: 2841 + 945 + 53 + 7061, name: '财产税' },
          { value: 1754 + 2058 + 108 + 207, name: '资源税' },
          { value: 4607 + 3087 + 3530 + 1257 + 6468, name: '行为税' }
        ]
      }
    ]
  };
  chart2Option: any = {
    title: {
      text: '2. 我国2020年四本预算收入(单位: 亿元)',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '10%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '24',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 182913, name: '一般公共预算' },
          { value: 93491, name: '政府基金性预算' },
          { value: 4774, name: '国有资本经营预算' },
          { value: 94378, name: '社会保险基金预算' }
        ]
      }
    ]
  };
  chart3Option: any = {
    title: {
      text: '3. 我国2020年主要税种及收入(单位: 亿元)',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {

        type: 'tree',

        edgeShape: 'polyline',

        data: [
          {
            name: '税种(按课税对象分类)',
            children: [
              {
                name: '流转税',
                children: [
                  {
                    name: '增值税',
                    value: 56791 + 13914 - 13611
                  },
                  {
                    name: '消费税',
                    value: 12028 + 620 - 17
                  },
                  {
                    name: '关税',
                    value: 2564
                  }
                ]
              },
              {
                name: '所得税',
                children: [
                  {
                    name: '企业所得税',
                    value: 36425
                  },
                  {
                    name: '个人所得税',
                    value: 11568
                  }
                ]
              },
              {
                name: '财产税',
                children: [
                  {
                    name: '房产税',
                    value: 2841
                  },
                  {
                    name: '契税',
                    value: 7061
                  },
                  {
                    name: '车船税',
                    value: 945
                  }
                ]
              },
              {
                name: '资源税',
                children: [
                  {
                    name: '资源税',
                    value: 1755
                  },
                  {
                    name: '城镇土地使用税',
                    value: 2058
                  }
                ]
              },
              {
                name: '行为税',
                children: [
                  {
                    name: '城市维护建设税',
                    value: 4607
                  },
                  {
                    name: '印花税',
                    value: 3087
                  },
                  {
                    name: '车辆购置税',
                    value: 3530
                  },
                  {
                    name: '耕地占用税',
                    value: 1258
                  },
                  {
                    name: '土地增值税',
                    value: 6468
                  }
                ]
              }
            ]
          }
        ],

        left: '2%',
        right: '2%',
        top: '18%',
        bottom: '20%',

        symbol: 'emptyCircle',

        orient: 'vertical',

        expandAndCollapse: true,

        label: {
          position: 'top',
          rotate: 0,
          verticalAlign: 'middle',
          align: 'center',
          fontSize: 14
        },

        leaves: {
          label: {
            position: 'bottom',
            rotate: 0,
            verticalAlign: 'top',
            align: 'middle'
          }
        },

        animationDurationUpdate: 750
      }
    ]
  }
}
