<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link><br>
      <router-link to="/about">About</router-link><br>
      <router-link to="/scrollPass">scrollPass</router-link><br>
      <router-link to="/ui">ui</router-link><br>
      <router-link to="/css">css</router-link><br>
      <router-link to="/js">js</router-link><br>
      <router-link to="/optimize">性能优化</router-link><br>
      <router-link to="/ue">用户体验</router-link><br>
      <router-link to="/list">list</router-link><br>
      <router-link to="/lazy">lazy</router-link><br>
      <router-link to="/pagePreload">路由预加载</router-link><br>
      <router-link to="/security">security</router-link><br>
      <router-link to="/grid">grid</router-link><br>
      <router-link to="/sign">sign</router-link><br>
      <router-link to="/promise">promise</router-link><br>
      <router-link to="/class">class</router-link><br>
      <router-link to="/image">image</router-link><br>
      <router-link to="/effect">效果</router-link><br>
      <router-link to="/dm">设计模式</router-link><br>
      <router-link to="/canvas">canvas</router-link><br>
      <router-link to="/webApi">web API</router-link><br>
      <router-link to="/bug">兼容性</router-link><br>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="postcss" scoped>
a {
  width: 100%;
  line-height: 40px;
}
</style>
