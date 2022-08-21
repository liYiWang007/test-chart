<template>
  <div class="video-card">
    <video ref="myVideo"
           class="video-js vjs-default-skin vjs-big-play-centered"
           controls
           poster="https://alifei05.cfp.cn/creative/vcg/veer/1600water/veer-167645584.jpg">
      <!--      poster=视频封面-->
      <source src="https://video.pearvideo.com/mp4/adshort/20180723/cont-1395081-12514761_adpkg-ad_hd.mp4"
              type="video/mp4">
    </video>
  </div>
</template>
<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
  name: 'VideoCard',
  data() {
    return {
      player: ''
    }
  },
  beforeDestroy() {
    console.log('dispose');
    this.player.dispose() //dispose()是官方的销毁函数
  },
  mounted() {
    this.initPlayer()
  },
  methods: {
    async initPlayer() {
      this.player = await videojs(this.$refs.myVideo, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: false,
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "none", //"auto" 不自动加载
        //设置视频播放器的显示宽度（以像素为单位）
        width: "800px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "400px",
        controlBar: {
          playToggle: true
        },
        playbackRates: [0.5, 1, 1.5, 2, 2.5]
      })
      // console.log(this.player.play);
    }
  }
}
</script>
<style lang="scss">
.video-card {
  //暂停显示播放按钮
  .vjs-paused .vjs-big-play-button,
  .vjs-paused.vjs-has-started .vjs-big-play-button {
    display: block;
  }
}
</style>
