let ueRoutes = [
  {
    path: '/ue',
    name: 'ue',
    component: () => import('../../views/ue/index.vue'),
    meta: {
      title: '用户体验'
    }
  },
  {
    path: '/ue/router-cache',
    name: 'routerCache',
    component: () => import('../../views/ue/router-cache.vue'),
    meta: {
      title: '路由父页状态保持',
      keepAliveIfRouteIs: ['routerCacheChild']
    }
  },
  {
    path: '/ue/router-cache/child',
    name: 'routerCacheChild',
    component: () => import('../../views/ue/router-cache-child.vue'),
    meta: {
      title: '路由父页状态保持-子页面'
    }
  }
]

export default ueRoutes
