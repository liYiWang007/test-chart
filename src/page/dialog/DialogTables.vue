<template>
  <ElDialog :visible.sync="show" @close="closeDialog">
    <!--    money.sync三重双向绑定-->
    <Son :money.sync="TabMon"/>
    <ElInput v-model="queryInfo.test"/>
    <ElInput @keyup.enter.native="search" v-model="queryInfo.keyword"/>
    <ElButton type="primary" @click="reset()">清空</ElButton>
    <ElTable :data="data">
      <ElTableColumn prop="id" label="id"/>
      <ElTableColumn prop="name" label="name"/>
      <ElTableColumn prop="username" label="username"/>
      <ElTableColumn prop="email" label="email"/>
    </ElTable>
  </ElDialog>
</template>

<script>
import axios from "axios"
import tableView from "@/mixin/table-view";
import Son from "@/page/dialog/son";
import dialog from "@/mixin/dialog";

export default {
  name: 'DialogTables',
  components: { Son },
  mixins: [tableView,dialog],
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
    async init() {
      if(this.id){
        this.TabMon=this.id
        console.log('参数时的TabMon',this.TabMon);
      }else{
        console.log('新建时');
      }
      console.log('queryInfo', this.queryInfo);
      await axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
        this.data = res.data
        // console.log('data', this.data);
      })
    },
    search() {
      console.log('search',this.queryInfo);
    },
    closeDialog(){
      this.close()
      this.$emit('update:id',this.TabMon)
      this.$emit('on-close')
    }
  }
}
</script>
