<template>
<div class="e-charts" :style="{ width, height }" :options="options">

</div>
</template>

<script>
import * as echarts from 'echarts/core';
// 图表后缀都为 Chart
import {
  TreemapChart, BarChart
} from 'echarts/charts';
import {
  GridComponent
} from 'echarts/components';
import {
  CanvasRenderer
} from 'echarts/renderers';

// 注册必须的组件
echarts.use(
    [BarChart, GridComponent, TreemapChart, CanvasRenderer]
)

export default {
  name: 'MyECharts',
  props:{
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '50vh'
    },
    options:{
      type: Object,
      default:null
    }
  },
  data(){
    return{
      myChart:null,
    }
  },
  watch:{
    width(){
      if(this.myChart){
        this.myChart.resize()
      }
    }
  },
  mounted(){
    this.myChart = echarts.init(this.$el);
    // 使用刚指定的配置项和数据显示图表。
    this.myChart.setOption(this.options);
  }
}
</script>

<style lang="scss">
.e-charts{
}
</style>
