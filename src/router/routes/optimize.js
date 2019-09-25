let optimizeRoutes = [
  {
    path: '/optimize',
    name: 'optimize',
    component: () => import('../../views/optimize/index.vue'),
    meta: {
      title: '性能优化'
    }
  },
  {
    path: '/optimize/time-slicing',
    name: 'timeSlicing',
    component: () => import('../../views/optimize/time-slicing.vue'),
    meta: {
      title: '时间切片'
    }
  }
]

export default optimizeRoutes
