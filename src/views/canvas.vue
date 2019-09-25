<template>
  <div>
    <p>canvas</p>
    <div class="btns">
      <button @click="draw">draw</button>
    </div>
    <canvas id="cvs" ref="cvs"></canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ctx: null
    }
  },
  methods: {
    draw () {
      let ctx = this.ctx
      ctx.arc(150, 75, 30, Math.PI / 2, 2 * Math.PI, false)
      ctx.stroke()
    }
  },
  mounted () {
    this.ctx = this.$refs.cvs.getContext('2d')
  }
}
</script>

<style lang="postcss" scoped>
#cvs {
  border: 1px solid #aaa;
}
</style>
