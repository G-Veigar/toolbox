import Home from '../../views/Home.vue'
// import jsRoutes from './js.js'
// import cssRoutes from './css.js'
// import optimizeRoutes from './optimize.js'

let routeConfigs = require.context('.', false, /\.js$/)

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'home'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../../views/About.vue'),
    meta: {
      title: 'about'
    }
  },
  {
    path: '/scrollPass',
    name: 'scrollPass',
    component: () => import(/* webpackChunkName: "scrollPass" */ '../../views/scroll-pass.vue'),
    meta: {
      title: 'scrollPass'
    }
  },
  {
    path: '/ui',
    name: 'ui',
    component: () => import('../../views/ui.vue'),
    meta: {
      title: 'ui'
    }
  },
  {
    path: '/fast',
    name: 'fast',
    component: () => import('../../views/fast.vue'),
    meta: {
      title: 'fast'
    }
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../../views/list.vue'),
    meta: {
      title: 'list'
    }
  },
  {
    path: '/lazy',
    name: 'lazy',
    component: () => import('../../views/lazy.vue'),
    meta: {
      title: 'lazy'
    }
  },
  {
    path: '/pagePreload',
    name: 'pagePreload',
    component: () => import('../../views/page-preload.vue'),
    meta: {
      title: 'pagePreload'
    }
  },
  {
    path: '/pagePreloadPage',
    name: 'pagePreloadPage',
    component: () => import('../../views/page-preload-page.vue'),
    meta: {
      title: 'pagePreloadPage'
    }
  },
  {
    path: '/security',
    name: 'security',
    component: () => import('../../views/security.vue'),
    meta: {
      title: 'security'
    }
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import('../../views/grid.vue'),
    meta: {
      title: 'grid'
    }
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../../views/sign.vue'),
    meta: {
      title: 'sign'
    }
  },
  {
    path: '/promise',
    name: 'promise',
    component: () => import('../../views/promise.vue'),
    meta: {
      title: 'promise'
    }
  },
  {
    path: '/class',
    name: 'class',
    component: () => import('../../views/class.vue'),
    meta: {
      title: 'class'
    }
  },
  {
    path: '/effect',
    name: 'effect',
    component: () => import('../../views/effect/index.vue'),
    meta: {
      title: 'effect'
    }
  },
  {
    path: '/effect/toTop',
    name: 'effectToTop',
    component: () => import('../../views/effect/scroll-to-top.vue'),
    meta: {
      title: 'effectToTop'
    }
  },
  {
    path: '/effect/fixedTop',
    name: 'fixedTop',
    component: () => import('../../views/effect/fixed-top.vue'),
    meta: {
      title: 'fixedTop'
    }
  },
  {
    path: '/effect/guide-modal',
    name: 'effectGuideModal',
    component: () => import('../../views/effect/guide-modal.vue'),
    meta: {
      title: '引导层'
    }
  },
  {
    path: '/image',
    name: 'image',
    component: () => import('../../views/image.vue'),
    meta: {
      title: 'image'
    }
  },
  {
    path: '/dm',
    name: 'designMode',
    component: () => import('../../views/design-mode/index.vue'),
    meta: {
      title: 'designMode'
    }
  },
  {
    path: '/dm/observer',
    name: 'observer',
    component: () => import('../../views/design-mode/observer.vue'),
    meta: {
      title: 'observer'
    }
  },
  {
    path: '/canvas',
    name: 'canvas',
    component: () => import('../../views/canvas.vue'),
    meta: {
      title: 'canvas'
    }
  }
]

routeConfigs.keys().forEach(routeItem => {
  let routeConfigItem = routeConfigs(routeItem).default
  if (routeItem !== './index.js') {
    routes = routes.concat(routeConfigItem)
  }
})

export default routes
