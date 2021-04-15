<!--
 * @Author: 高歌
 * @Date: 2020-05-31 21:30:29
 * @LastEditTime: 2020-07-03 13:49:33
 * @LastEditors: 高歌
 * @FilePath: /toolbox/src/views/bug/background-repeat.vue
 * @Description:
-->
<template>
  <div class="page">
    <p>
      background的背景图片如果超过了一定的高度，在某些设备下展示不出来(如华为，苹果可以)
    </p>
    <div class="bg"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.bg {
  width: 100%;
  height: 9028px;
  /* background: url('./asset/main-bg.png'); */
  background-size: 100%;
  background-repeat: repeat-y;
}
</style>
