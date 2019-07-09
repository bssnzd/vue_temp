import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve),
      // redirect: 'info',
      children: [
        {
          path: 'info',
          name: 'info',
          component: resolve => require(['@/components/main/info'], resolve)
        },
        {
          path: 'news',
          name: 'news',
          component: resolve => require(['@/components/main/news'], resolve)
        },
        {
          path: 'test',
          name: 'test',
          redirect: 'test/test1',
          component: resolve => require(['@/components/main/test'], resolve),
          children: [
            {
              path: 'test1',
              name: 'test1',
              component: resolve => require(['@/components/main/test1'], resolve)
            },
            {
              path: 'test2',
              name: 'test2',
              component: resolve => require(['@/components/main/test2'], resolve)
            }
          ]
        }
      ]
    }
  ]
})
router.beforeEach((to, form, next) => {
  if (to.path === '/') {
    if (location.search.indexOf('info') !== -1) {
      next({path: 'info'})
    } else if (location.search.indexOf('news') !== -1) {
      next({path: 'news'})
    } else if (location.search.indexOf('test') !== -1) {
      next({path: 'test'})
    }
  }
  next()
})
router.afterEach(() => {
  console.log('跳转成功！！！')
})
export default router
