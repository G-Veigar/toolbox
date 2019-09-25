let webApiRoutes = [
  {
    path: '/webApi',
    name: 'webApi',
    component: () => import('../../views/webApi/index.vue'),
    meta: {
      title: 'web API'
    }
  },
  {
    path: '/webApi/IntersectionObserver',
    name: 'IntersectionObserver',
    component: () => import('../../views/webApi/IntersectionObserver.vue'),
    meta: {
      title: '交叉观察者'
    }
  }
]

export default webApiRoutes
