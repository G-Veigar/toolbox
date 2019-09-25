let cssRoutes = [
  {
    path: '/css',
    name: 'css',
    component: () => import('../../views/css/index.vue'),
    meta: {
      title: 'css'
    }
  },
  {
    path: '/css/figure',
    name: 'cssFigure',
    component: () => import('../../views/css/figure.vue'),
    meta: {
      title: 'css画图形'
    }
  },
  {
    path: '/css/center',
    name: 'cssCenter',
    component: () => import('../../views/css/center.vue'),
    meta: {
      title: 'css居中'
    }
  }
]

export default cssRoutes
