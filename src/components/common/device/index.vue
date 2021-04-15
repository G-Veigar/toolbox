<!--
 * @Author: 高歌
 * @Date: 2020-07-03 13:36:02
 * @LastEditTime: 2020-07-03 16:49:43
 * @LastEditors: 高歌
 * @FilePath: /toolbox/src/components/common/device/index.vue
 * @Description:
-->
<template>
  <div class="device">
    <div class="marvel-device iphone-x">
      <div class="notch">
          <div class="camera"></div>
          <div class="speaker"></div>
      </div>
      <div class="top-bar"></div>
      <div class="sleep"></div>
      <div class="bottom-bar"></div>
      <div class="volume"></div>
      <div class="overflow">
          <div class="shadow shadow--tr"></div>
          <div class="shadow shadow--tl"></div>
          <div class="shadow shadow--br"></div>
          <div class="shadow shadow--bl"></div>
      </div>
      <div class="inner-shadow"></div>
      <div
        class="screen"
        :style="{
          paddingTop: `${deviceInfo.headerPadding}px`,
        }">
        <iframe
          ref="iframe"
          src="http://localhost:8080/"
          frameborder="0"
          :width="deviceInfo.ratio.width"
          :height="deviceInfo.ratio.height"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import './devices.min.css'

const deviceMap = {
  iphoneX: {
    class: 'iphone-x',
    ratio: {
      width: 375,
      height: 821
    },
    headerPadding: 0
  }
}

export default {
  props: {
    name: {
      type: String,
      default: 'iphoneX'
    }
  },
  computed: {
    deviceInfo () {
      return deviceMap[this.name]
    }
  },
  mounted () {
    console.log('mounted', this.$refs.iframe.contentWindow.window)
  }
}
</script>

<style>
.screen {
  box-sizing: content-box;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>
