<template>
  <div class="">
    <h2>router-cache-child</h2>
    <button @click="back">返回</button>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
