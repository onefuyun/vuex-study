import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'  //@这个东西在build中的webpack.base.conf.js可以查看到配置 @：'requlire（"src")'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/home',
      name:'Home',
      components:{
        default:resolve=>require(['@/pages/Home'],resolve)
      }
    },
    {
      path:'/header',
      name:'header',
      components:{
        default:resolve=>require(['@/components/header'],resolve)
      }
    }
  ]
})
