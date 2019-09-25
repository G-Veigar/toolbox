const jsRoutes = [
  {
    path: '/js',
    name: 'js',
    component: () => import('../../views/js/index.vue'),
    meta: {
      title: 'js'
    }
  },
  {
    path: '/js/clone',
    name: 'jsClone',
    component: () => import('../../views/js/clone.vue'),
    meta: {
      title: 'js深拷贝'
    }
  },
  {
    path: '/js/proto',
    name: 'jsProto',
    component: () => import('../../views/js/proto.vue'),
    meta: {
      title: '原型与面向对象'
    }
  },
  {
    path: '/js/algorithm',
    name: 'jsAlgorithm',
    component: () => import('../../views/js/algorithm.vue'),
    meta: {
      title: '算法'
    }
  },
  {
    path: '/js/class',
    name: 'jsClass',
    component: () => import(/* webpackChunkName: "es6class" */ '../../views/js/class.vue'),
    meta: {
      title: 'class'
    }
  },
  {
    path: '/js/throttle',
    name: 'jsThrottle',
    component: () => import(/* webpackChunkName: "es6class" */ '../../views/js/throttle.vue'),
    meta: {
      title: 'throttle'
    }
  },
  {
    path: '/js/countDown',
    name: 'countDown',
    component: () => import(/* webpackChunkName: "es6class" */ '../../views/js/count-down.vue'),
    meta: {
      title: 'countDown'
    }
  },
  {
    path: '/js/async',
    name: 'jsAsync',
    component: () => import(/* webpackChunkName: "es6class" */ '../../views/js/async.vue'),
    meta: {
      title: 'jsAsync'
    }
  },
  {
    path: '/js/ajax',
    name: 'ajax',
    component: () => import(/* webpackChunkName: "es6class" */ '../../views/js/ajax.vue'),
    meta: {
      title: 'ajax'
    }
  }
]

export default jsRoutes
