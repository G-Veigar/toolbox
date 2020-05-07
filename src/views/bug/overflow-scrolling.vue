<template>
  <div class="overflow-scrolling">
    滚动在ios低版本没有惯性，需要添加-webkit-overflow-scrolling: touch
    <div class="wrapper">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, eum. Inventore corporis earum ipsa debitis ut magnam ducimus molestias sequi? Eos saepe sit omnis similique animi ratione quasi reprehenderit? Repudiandae alias quam quis doloremque, soluta a veritatis iure molestias perferendis ut, provident dolor consequatur, non tenetur quia atque veniam consectetur ratione reiciendis voluptatem expedita. Aliquam aperiam sint minus adipisci consectetur quidem vero itaque placeat voluptates cumque minima neque commodi, quaerat quo hic pariatur perspiciatis veniam ut dolore labore possimus. Voluptatibus quo accusantium rem asperiores ducimus temporibus. Sequi illum tenetur placeat maiores quas atque, ducimus eveniet asperiores laboriosam sapiente, earum repellendus consectetur laborum exercitationem quibusdam. Accusantium consectetur asperiores officia facilis nesciunt! Beatae accusamus, quae nam eos deleniti voluptates quam laudantium ratione quis ullam! Adipisci error cumque numquam excepturi, velit tenetur autem aperiam harum eveniet, vitae optio id eius a est architecto quibusdam officia praesentium ex! Beatae consectetur quia, autem inventore, soluta eum blanditiis vero rem voluptatum repellat hic esse necessitatibus labore culpa iusto quam dolorum totam deleniti non ea? Incidunt, dolorem ducimus libero ad explicabo dignissimos atque esse, voluptatibus ipsam nobis excepturi, deserunt veniam officia ipsum illum corrupti mollitia hic nostrum! Accusantium possimus harum provident minus saepe debitis illo quam necessitatibus.
    </div>
    <div class="wrapper2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid earum quos a nemo facere eligendi mollitia tenetur eum cum qui nostrum, quia nam laborum ad. Soluta voluptas officia maxime. Sit, ea exercitationem! Qui, laudantium quam perspiciatis, facilis corporis sunt eligendi quidem libero fugit eaque corrupti dolorum et magni perferendis, voluptates laboriosam nam ex. Molestiae, minima inventore libero labore non aliquid sint sunt cumque? Atque sed et ipsam totam natus suscipit laudantium? Consectetur vero nostrum amet laboriosam alias odio suscipit ex possimus optio voluptate eius eligendi pariatur iste, quidem rem omnis excepturi repellat ad. Voluptas ea quaerat officia, porro reprehenderit quas non deleniti cum alias similique illum temporibus ipsum quis nesciunt totam ex beatae voluptatem animi id perspiciatis labore dolor? Incidunt itaque exercitationem repellat distinctio. Cumque maxime perspiciatis sunt sequi! Id ipsam vero quis enim nemo molestiae, officia dolores fugit illum neque, dolorum illo, optio debitis rerum aliquam temporibus! Dolorem voluptatibus veritatis totam, debitis ullam esse quia maxime aliquam veniam labore ducimus ut iusto distinctio libero? Eligendi, ab amet esse vel ea soluta, quia enim provident blanditiis incidunt consequuntur rerum quos quis obcaecati dolores libero atque architecto tenetur earum odio neque voluptatem? Atque porro eos iusto unde qui sed quo?
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
  margin-top: 30px;
  border: 1px solid #aaa;
  height: 180px;
  overflow: auto;
  /* https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-overflow-scrolling */
  -webkit-overflow-scrolling: touch
}
.wrapper2 {
  margin-top: 30px;
  border: 1px solid #aaa;
  height: 180px;
  overflow: auto;
}
</style>
