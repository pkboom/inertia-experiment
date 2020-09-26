import { InertiaApp } from './inertia-vue/index'
import Vue from 'vue'
import InertiaWrapper from './InertiaWrapper'

Vue.use(InertiaApp)

const app = document.getElementById('app')

new Vue({
  components: {
    InertiaWrapper,
  },
}).$mount(app)
