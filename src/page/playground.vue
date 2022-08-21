<template>
  <div class="PlayGroud">
    <ElButton @click="goTables('playground传的')"> 去dialog-tables</ElButton>
    <ElButton @click="goTables()"> 去dialog-tables(不带参数)</ElButton>

    <VideoCard v-if="showVideo"/>
    <ElButton @click="showVideo=true">显示video</ElButton>
    <ElButton @click="showVideo=false">关闭video</ElButton>
    <MyECharts :options="testOptions"/>
    <!--    <MyECharts :options="test2"/>-->
    <div>pyz-charts</div>
    <pyz-charts @init="instance($event)" :options="test2"/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<!--    .sync三重双向绑定-->
    <TableS :visible.sync="showTables" v-if="showTables" :id.sync="id"  @on-close="closeSon(id)"/>
  </div>
</template>

<script>

import {getEchartPieOption} from '../components/option/option'
import {TreeMapOptions, BarChartOptions} from '../components/MyECharts/options/options'
import MyECharts from "@/components/MyECharts/MyECharts";
import VideoCard from "@/components/VideoCard";
import TableS from "@/page/Tables";

export default {
  name: 'PlayGroud',
  components: {
    TableS,
    VideoCard,
    MyECharts,
  },
  data() {
    return {
      mapInstance: null,
      barOption: {},
      testOptions: TreeMapOptions,
      test2: BarChartOptions,
      showVideo: false,
      id:'',
      showTables:true
    }
  },
  mounted() {
    this.getPage()
  },
  methods: {
    async getPage() {
      this.barOption = getEchartPieOption()
      this.initEcharts()
    },
    instance(instance) {
      this.mapInstance = instance
    },
    initEcharts() {
      if (this.mapInstance) {
        this.mapInstance.setOption(this.test2)
      }
    },
    goTables(num){
      num?this.id=num:this.id=''
      this.showTables=true
    },
    closeSon(num){
      // 三重双向绑定
      // console.log('closeSon',num);
    }
  }
}

</script>

<style lang="scss">

</style>
