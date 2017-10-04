import Vue from 'vue'
import Router from 'vue-router'
import RegForm from '@/components/RegForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RegForm',
      component: RegForm
    }
  ]
})
