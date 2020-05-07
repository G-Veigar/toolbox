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
  background: url('./asset/main-bg.png');
  background-size: 100%;
  background-repeat: repeat-y;
}
</style>
