<template>
  <div class="time-slicing">
    <div class="title">时间切片</div>
    <div>时间切片是一种概念，将长任务分成若干切片任务，在多次事件循环中去执行，从而不阻塞主线程。</div>
    <div>时间切片是解决长任务的一种方法，除此之外还可以使用Web Worker(不能访问DOM)</div>
    <div class="demo">
      <button @click="handleClick"></button>
    </div>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error rem totam cum sed soluta numquam ex aspernatur exercitationem. Repellat veritatis, enim similique facere eos, consequuntur facilis ut esse sequi iste labore vero officiis nisi laboriosam cumque quisquam ducimus accusantium ipsa, deserunt perferendis? Labore error quos esse aliquam et odit quasi rerum! Impedit voluptas cupiditate reiciendis quibusdam voluptatum perferendis, modi ad vitae eius beatae mollitia necessitatibus enim, officia explicabo quos consectetur quidem dolorum veniam placeat. Pariatur nam, dolore earum quae, sed praesentium assumenda distinctio laboriosam quo, amet dicta. Commodi ea dignissimos distinctio ratione rem laudantium. Quasi laboriosam explicabo unde, nesciunt vitae aspernatur illum et maiores provident possimus nulla hic qui corporis iste inventore illo, fugiat eius, consequuntur voluptate? Pariatur alias ullam aut minus, dicta vitae nulla officia incidunt tempora molestias odit fugiat mollitia. Nisi iusto sint, molestias voluptates necessitatibus beatae quasi consequuntur rem dolorem amet exercitationem atque natus facilis minus doloremque eius quos pariatur accusamus. Eum quibusdam error cum dolores dicta laborum recusandae aliquam praesentium dolorem laudantium possimus rerum ullam optio eius suscipit quo asperiores ad saepe, corporis voluptate expedita. Iste illo officiis pariatur tenetur molestias deserunt perferendis veritatis, recusandae animi vitae nam similique nobis voluptatem itaque, possimus odio quasi. Recusandae, cum dolore. Quae voluptates tempore saepe optio sed consectetur nemo adipisci rem nobis eum asperiores dolor vel explicabo facere autem at delectus corrupti repellat voluptate voluptatum, voluptatem exercitationem. Quaerat, ullam quidem earum eligendi veniam voluptatibus eius assumenda quo itaque est distinctio aperiam, ex cupiditate rem vel accusantium quod, repellendus quos! Iure consequatur sint velit laboriosam quas sit fugiat nisi reiciendis deleniti harum? Odit consequatur, quisquam quia nam sint eum corporis. Eius accusamus ex deserunt velit illo dolor voluptates perferendis blanditiis vitae? Eius accusantium, illo necessitatibus perspiciatis repellendus expedita et eos esse officia natus voluptatum est quibusdam labore! Nemo quia quaerat iste asperiores tempore illo accusamus ducimus ab voluptatibus laboriosam, recusandae quidem dolores enim ipsam corrupti blanditiis amet rem reprehenderit. Ea pariatur nobis, perspiciatis quis maxime ratione minima ipsum blanditiis expedita rerum deserunt quae praesentium sunt natus culpa similique quas sapiente ullam accusantium id dolorem? Explicabo voluptate tempora nihil accusamus iure quod atque quia impedit velit ab ad facilis expedita culpa, nostrum, ullam sunt perspiciatis! Repudiandae vel eligendi voluptatibus maiores nisi quibusdam, deserunt obcaecati a beatae molestias corporis at veniam odio, harum laudantium amet tempora repellat cumque doloremque? Enim reprehenderit delectus error incidunt facilis ipsum, expedita quidem ipsam consectetur sit amet ab accusamus nam. Laudantium, iusto tenetur autem dolorem unde aut velit amet id sint beatae praesentium culpa consectetur in impedit perferendis sequi officia eos itaque similique quas harum. Excepturi quos dolores odio consequatur optio porro explicabo pariatur, sapiente quisquam tempore sit quam ea quidem voluptatum ut debitis illum exercitationem consequuntur cumque. Consectetur amet impedit esse dignissimos iste quasi quis unde et officia? Pariatur, cumque consectetur. Odio inventore reprehenderit ratione quibusdam magni quis vitae quia illo aut facere. Et incidunt, delectus dolorum repellendus explicabo similique natus quod facere dolores sunt repellat, quia, in non ea vitae accusantium! Vero officiis quo consectetur nobis, voluptatibus est, adipisci rerum dolore commodi sapiente deserunt veritatis exercitationem, totam dolorem deleniti neque ipsam perferendis! Ducimus qui itaque vero veritatis asperiores corrupti nemo quos magnam ipsum? Nobis sed aperiam architecto nostrum nihil repudiandae quis laboriosam cupiditate, soluta minus illum itaque. Ab hic nostrum quo provident consectetur at, autem, unde rem laboriosam magnam aspernatur porro expedita eum deserunt dolorem omnis odit. Id sunt dicta facere adipisci doloremque natus eum deserunt magnam, blanditiis sed commodi magni esse numquam unde neque voluptates corrupti, illo debitis quia est dignissimos corporis voluptas itaque! Quod vitae distinctio labore iure, sapiente eum rem, nam unde, dolores nihil laboriosam minus ipsa rerum explicabo eaque? Earum, quasi magnam? Id possimus, vel facilis magni praesentium voluptatem sint dicta, maiores doloremque rem quisquam? Doloremque incidunt necessitatibus voluptas officia, consequuntur praesentium quis laboriosam dicta aspernatur animi reiciendis. Temporibus, asperiores! Sit recusandae deserunt, deleniti expedita eum repellendus repellat ea consectetur facilis eius dolor soluta debitis velit vero. Dolores sunt ducimus nam quo obcaecati autem modi! In quasi neque ducimus dicta consectetur modi esse facilis rerum ad veritatis incidunt pariatur libero quibusdam amet laborum, a at aspernatur aliquam animi aut consequatur fugiat cupiditate repellat iure? Veritatis in modi possimus vero dicta, quisquam repellendus? Quam cumque tempore non eos excepturi expedita. Et ut sed neque esse expedita tempore magnam voluptatibus enim dignissimos, quo incidunt, voluptatem explicabo delectus. Praesentium optio rem odio esse vero mollitia officiis accusantium sed ut animi laudantium porro, vel id ipsa. Ea nisi tempore, ratione corrupti quae possimus enim culpa dolorum aspernatur quo saepe ad sequi perspiciatis explicabo laudantium numquam quod perferendis! Maxime ducimus maiores ipsa ea aliquid dicta quis? Quibusdam culpa debitis esse in ratione doloremque, libero atque provident nostrum adipisci minima unde rem fuga. Nulla saepe eos temporibus, necessitatibus ducimus non et quod impedit voluptates accusantium harum nostrum, blanditiis officiis eveniet quidem libero excepturi facere deserunt. Soluta eum laudantium cumque. Iure eaque saepe excepturi, dignissimos incidunt rem alias! Quaerat dolor illo optio doloremque nihil quia, beatae itaque officia veniam consectetur vitae blanditiis, nostrum dolorem ullam voluptatum mollitia a labore dolore sapiente. Quaerat nihil consequuntur quia, ex dolorem quibusdam earum sint in corrupti! Debitis maiores temporibus, fugit error voluptates dolores. Aperiam earum officiis facilis sunt numquam amet, voluptates quae tempora beatae, dolorem et voluptatibus, iusto tempore! Illo animi nesciunt consequuntur ea consequatur accusantium eos, eligendi similique, exercitationem, culpa a. Enim excepturi, quidem pariatur tenetur in officiis fugiat, vero, aperiam repudiandae sit doloremque ea. Labore placeat commodi saepe a. Modi eius aliquam reiciendis veniam, odit quisquam! Vitae quisquam laborum molestiae rem cum optio cumque quae, dolor tenetur praesentium iste unde explicabo odio debitis eos assumenda nesciunt rerum repellat voluptatibus corrupti consectetur tempora. Dolorum, distinctio? Esse soluta numquam quas, inventore debitis unde. Voluptatem vel porro, optio consequatur, enim asperiores tempore magni, nihil modi aspernatur eos atque at eveniet necessitatibus. Accusamus accusantium illum deserunt quod consequuntur sapiente nulla libero architecto iste ea. Obcaecati nemo aut, magnam error optio minima, maiores ullam quasi doloremque quod sapiente laborum reiciendis facilis itaque aspernatur sed vel.</div>
  </div>
</template>

<script>
function timeSlicing (gen) {
  if (typeof gen === 'function') gen = gen()
  if (!gen || typeof gen.next !== 'function') return

  return function next () {
    const start = performance.now()
    let res = null
    do {
      res = gen.next()
    } while (!res.done && performance.now() - start < 50)

    if (res.done) return
    setTimeout(next)
  }
}

window.addEventListener('scroll', () => {
  console.log('scroll')
})

// const start = performance.now()
// while (performance.now() - start < 5000) {
//   console.log('not yet')
// }

timeSlicing(function * () {
  const start = performance.now()
  while (performance.now() - start < 5000) {
    console.log('not yet')
    yield
  }
})()

export default {
  methods: {
    handleClick () {
      console.log('handleClick')
    }
  },
  mounted () {
    this.log = function * () {
      const start = performance.now()
      while (performance.now() - start < 5000) {
        console.log('not yet')
        yield
      }
    }
    // timeSlicing(this.log)()
  }
}
</script>
