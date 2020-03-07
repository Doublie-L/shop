export const OPTION_VISIT: any = {
  color: ['#975fe4'],
  xAxis: {
    type: 'category',
    boundaryGap: false,
    show: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value',
    show: false,
    min: -2
  },
  grid: {
    left: '-16px',
    right: '5%',
    bottom: '-16px',
    top: '5%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis'
  },
  series: [{
    name: '数量',
    data: [],
    type: 'line',
    show: false,
    connectNulls: true,
    lineStyle: {
      color: '#975fe4',
      opacity: 0
    },
    showSymbol: false,
    areaStyle: {
      origin: 'start',
      color: '#975fe4'
    }
  }]
};
export const LIKE: any = {
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '5%',
    right: '0%',
    bottom: '5%',
    top: '5%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      show: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
    }
  ],
  series: [
    {
      name: '数量',
      type: 'bar',
      barMinHeight: 2,
      barWidth: '60%',
      data: [],
      itemStyle: {
        color: '#3ba1ff'
      }
    }
  ]
};
export const OPERATE: any = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  color: ['#3ba1ff', '#36cbcb', '#4ecb73'],

  legend: {
    orient: 'vertical',
    right: '20px',
    icon: 'circle',
    width: 10,
    itemWidth: 14,
    itemHeight: 14,
    textStyle: {
      fontSize: 12,
      color: '#212121'
    },
    top: 'middle',
    borderRadius: 10,
    data: []
  }
  ,
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: [80, 117],
      center: ['35%', '50%'],
      itemStyle: {
        normal: {
          borderWidth: 5,
          borderColor: '#fff',
        }
      },
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '14',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: []
    }
  ]
};
