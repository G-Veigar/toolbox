<!--
 * @Author: 高歌
 * @Date: 2020-05-31 21:30:29
 * @LastEditTime: 2020-06-29 11:34:10
 * @LastEditors: 高歌
 * @FilePath: /toolbox/src/views/js/throttle.vue
 * @Description:
-->
<template>
  <div class="throttle">
    <h2>Debounce</h2>
    <h3>Input</h3>
    <input type="text" @input="handleInput">
    <h3>Input with Debounce</h3>
    <input type="text" @input="handleInputWithDebounce">
    <h2>throttle</h2>
  </div>
</template>

<script>
// 节流函数，一段时间执行一次
const throttle = (fun, time) => {
  let datePre = 0
  return function (...args) {
    let now = +new Date()
    if (now - datePre > time) {
      datePre = now
      return fun.apply(this, args)
    }
  }
}

// 防抖函数，一段时间后才执行
const debounce = (fun, time) => {
  let timer
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, time)
  }
}
const log = (text) => {
  console.log(text)
}

const debounceLog = debounce(log, 500)

export default {
  methods: {
    handleInput ($e) {
      log($e.target.value)
    },
    handleInputWithDebounce ($e) {
      debounceLog($e.target.value)
    }
  },
  mounted () {
    let resize = () => {
      console.log('resize')
    }
    let throttleResize = throttle(resize, 1000)
    window.addEventListener('resize', throttleResize)
  }
}
</script>

<style lang="postcss" scoped>
input {
  border: 1px solid #aaa;
}
</style>
