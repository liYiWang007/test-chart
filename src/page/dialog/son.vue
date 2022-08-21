<template>
<div>
  <!--    money.sync三重双向绑定-->
 <p> son:{{money}}</p>
  <button @click="changeMon(money)">改变数值</button>
</div>
</template>

<script>
export default {
  name: 'Son',
  props:{
    money:{type:String,default:'222'}
  },
  data(){
    return{
      changNu:'123456'
    }
  },
  methods:{
    changeMon(num){
      this.$emit('update:money', num=this.changNu)
      console.log('son',num);
    }
  }
}
</script>

<style lang="scss">

</style>
