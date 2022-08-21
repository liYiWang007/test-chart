<template>
  <div class="test-upload">

    <p>{{  }}</p>


    <ElUpload
        action="#"
        list-type="picture-card"
        :limit="1"
        :disabled="disabled"
        @before-upload="uploadSuccess(file.url)">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
        >
        <span class="el-upload-list__item-actions">
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
          <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleShow"
          >
          <i class="el-icon-view"></i>
        </span>
      </span>
      </div>
    </ElUpload>
    <img :src="imgUrl" alt="" width="400px" height="300px"/>
  </div>
</template>

<script>
export default {
  name: 'TestUpload',
  props: {
    imgUrl: String
  },
  data() {
    return {
      disabled: false,
      // imgUrl:''
      // file:{
      //   url:''
      // }
    }
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handleShow() {
      console.log(this.imgUrl);
    },
    uploadSuccess(url){
      alert(11)
      this.$message({message:'来了'})
      this.disabled=true
      // this.imgUrl=url
      console.log('onSucc',url);

      this.$emit('update:imgUrl',url)
    }
  }
}
</script>

<style lang="scss">

</style>
