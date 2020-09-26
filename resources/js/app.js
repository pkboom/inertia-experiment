import Errors from '@/Utils/Errors'
import { InertiaApp } from './inertia-vue/index'
import { InertiaProgress } from './progress/index'
import PortalVue from 'portal-vue'
import Vue from 'vue'

InertiaProgress.init()

Vue.config.productionTip = false

Vue.use(InertiaApp)
Vue.use(PortalVue)

const app = document.getElementById('app')
const pages = require.context('./', true, /\.vue$/i)

new Vue({
  render: h =>
    h(InertiaApp, {
      props: {
        initialPage: JSON.parse(app.dataset.page),
        resolveComponent: page => pages(`./Pages/${page}.vue`).default,
        transformProps: props => {
          return {
            ...props,
            errors: new Errors(props.errors),
          }
        },
      },
    }),
}).$mount(app)
