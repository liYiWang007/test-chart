<template>
  <div>
    <ElForm :model="queryInfo" ref="form" :inline="true">
      <ElFormItem label="关键字">
        <ElInput @keyup.enter.native="renderTable" v-model="queryInfo.keyword"/>
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @submit="renderTable">搜索</ElButton>
        <ElButton type="primary" @click="clear">清空</ElButton>
      </ElFormItem>
    </ElForm>
    <ElTable :data="data">
      <ElTableColumn prop="id" label="id"/>
      <ElTableColumn prop="name" label="name"/>
      <ElTableColumn prop="username" label="username"/>
      <ElTableColumn prop="email" label="email"/>
    </ElTable>
  </div>
</template>

<script>
// import {getUsers} from '@/api/api'
import axios from "axios"
import tableView from "@/mixin/table-view";

export default {
  name: 'TableS',
  mixins: [tableView],
  props:{
    id:String
  },
  data() {
    return {
      data: [],
      keyword: '',
      queryInfo: {
        test: 'test'
      },
      TableUrl:'',
      TabMon:''
    }
  },
  watch:{
    TabMon(num){
      console.log('papa',num);
    }
  },
  methods: {
    init() {
      if(this.id){
        this.TabMon=this.id
        console.log('参数时的TabMon',this.TabMon);
      }else{
        console.log('新建时');
      }
      console.log('queryInfo', this.queryInfo);
      this.renderTable()
    },
    async renderTable(){
      await axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
       let _tableList=res.data.filter(item=>{
         // 根据username 过滤数据
         return item.username.indexOf(this.queryInfo.keyword) !== -1
        })
        this.data = _tableList
      })
    },
    clear() {
      this.queryInfo.keyword=''
      this.renderTable()
    },
  }
}
</script>

<style lang="scss">

</style>
