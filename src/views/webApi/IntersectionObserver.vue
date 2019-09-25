<template>
  <div>
    <div>IntersectionObserver</div>
    <div class="scroll-wrapper" ref="wrapper">
      <div class="scroll-div div-a" ref="a">a</div>
      <div class="scroll-div div-b" ref="b">b</div>
      <div class="scroll-div div-c" ref="c">c</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    let ob = new IntersectionObserver(entries => {
      entries.forEach(item => console.log(item))
    })
    ob.observe(this.$refs.a)
  }
}
</script>

<style lang="postcss" scoped>
.scroll-wrapper {
  height: 150px;
  overflow: scroll;
  border: 1px solid #aaa;
  margin: 20px;
}
.scroll-div {
  height: 80px;
  background-color: #cccccc;
  border: 1px solid #bbb;
  margin: 20px;
}
</style>
