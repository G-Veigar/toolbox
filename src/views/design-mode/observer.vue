<template>
  <div>
    <button @click="login">登录</button>
    <button @click="daka">打卡</button>
    <button @click="remove">remove</button>
  </div>
</template>

<script>
let event = {
  list: {},
  on (eventName, cb) {
    if (!event.list[eventName]) {
      event.list[eventName] = []
    }
    event.list[eventName].push(cb)
  },
  emit (eventName, payload) {
    let cbs = event.list[eventName]
    cbs.forEach(cb => {
      cb(payload)
    })
  },
  remove (eventName, cb) {
    let cbs = event.list[eventName]
    if (!cb) {
      event.list[eventName] = []
      // cbs = []
    } else {
      cbs.forEach((thisCb, i) => {
        if (thisCb === cb) {
          cbs.splice(i, 1)
        }
      })
    }
  }
}

export default {
  methods: {
    login () {
      event.emit('login', { name: '小明' })
    },
    daka () {
      event.emit('daka', { name: '小李' })
    },
    remove () {
      event.remove('daka')
      // console.log(event)
    }
  },
  created () {
    event.on('daka', person => {
      console.log(`${person.name}打卡成功`)
    })
    event.on('login', person => {
      console.log(`${person.name}登录成功`)
    })
  }
}
</script>
