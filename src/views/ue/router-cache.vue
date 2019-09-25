<template>
  <div class="router-cache">
    <h2>router-cache</h2>
    <p>比如列表和详情页面，进入详情返回到列表页面，希望保持详情页面的之前的状态</p>
    <p>比如保持列表页的滚动状态，或者一些表单数据，或者购物车数据等等</p>
    <p>并且通常不刷新页面，接近原生的体验</p>
    <p>就比如当前页面是父页面</p>
    <div>
      <span>username：</span>
      <input class="user-input" type="text">
    </div>
    <button @click="goChild">子页面</button>
    <br>
    <p>vue-router滚动行为scrollBehavior中提供了savedPosition参数，当页面返回（如router.go(-1)，能返回到之前保存的滚动位置</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium suscipit impedit architecto cupiditate animi ipsa doloribus dolores dolorem dignissimos possimus quis ducimus modi rerum a amet dolorum dolor fugiat nobis error, iste itaque, consequatur repellat! Nemo, cum repudiandae? Iusto reiciendis laudantium, unde omnis laborum voluptatum voluptate esse doloremque corrupti maxime accusantium beatae culpa nostrum hic doloribus harum aut quod a aliquam saepe deleniti! Eaque id tenetur odit aliquid facere, illo iure corrupti molestiae sit cum, velit similique delectus at debitis dolorum sed saepe. Inventore, facilis quaerat distinctio esse, quos corporis numquam ipsam eum error autem, exercitationem neque mollitia sunt quis eaque culpa vel sed. Quaerat dolore voluptates accusamus adipisci quo, veritatis doloribus recusandae vero, fugit beatae saepe voluptate alias laboriosam eos facere. Aspernatur, necessitatibus reprehenderit accusantium atque excepturi alias temporibus nesciunt eligendi officia asperiores minima voluptas aliquam eaque incidunt quibusdam vero aliquid a fugit provident perspiciatis, ratione quas voluptatibus eum. Excepturi quis odio porro! Unde, voluptatum! Praesentium reiciendis incidunt perspiciatis velit saepe vero libero aperiam, beatae maxime distinctio! Eos consequuntur, pariatur non veniam maiores vitae corrupti. Libero commodi voluptatibus necessitatibus esse, eligendi numquam, aliquid accusamus ex odit nam consectetur! Mollitia tempora debitis corporis, et iusto atque ea maiores. Tempore quisquam assumenda blanditiis. Dolor, quae. Libero esse officia, atque soluta velit id vel ab quod ipsam reiciendis amet recusandae veniam quibusdam explicabo est iure quos officiis inventore voluptatum dicta corporis. Magni laboriosam quaerat fugit molestias ipsum consectetur, consequatur maiores accusantium. Dolorem saepe ipsa porro iure delectus? Cum facere necessitatibus nemo, culpa, dignissimos ab magni blanditiis illo minus perspiciatis magnam ipsum quam rerum error consectetur labore impedit voluptates et? Incidunt unde consectetur optio maxime similique! Asperiores, consectetur recusandae rerum labore ea culpa? Nemo ducimus quis quo pariatur. Sit, totam! Libero est laboriosam tempore expedita doloremque veniam esse asperiores maxime iusto quam.</p>
  </div>
</template>

<script>
export default {
  methods: {
    goChild () {
      this.$router.push('/ue/router-cache/child')
      conso
    }
  }
}
</script>

<style lang="postcss" scoped>
.user-input {
  border: 1px solid #888;
}
</style>
