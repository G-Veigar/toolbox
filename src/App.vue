<template>
  <div id="app">
    <keep-alive :include="keepAliveIncludes">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keepAliveIncludes: []
    }
  }
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-size: 32px;
  line-height: 1.2;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fc9153;
}
</style>
