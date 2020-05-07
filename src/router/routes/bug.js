let cssRoutes = [
  {
    path: '/bug',
    name: 'bug',
    component: () => import('../../views/bug/index.vue'),
    meta: {
      title: 'bug'
    }
  },
  {
    path: '/bug/background-repeat',
    name: 'bugBackgroundRepeat',
    component: () => import('../../views/bug/background-repeat.vue'),
    meta: {
      title: 'background-repeat长图不展示'
    }
  },
  {
    path: '/bug/overflow-scrolling',
    name: 'overflowScrolling',
    component: () => import('../../views/bug/overflow-scrolling.vue'),
    meta: {
      title: 'ios滚动无惯性'
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
