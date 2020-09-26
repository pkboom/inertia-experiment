<script>
import { InertiaApp } from './inertia-vue/index'

export default {
  props: {
    page: Object,
  },
  render(h) {
    return h(InertiaApp, {
      props: {
        initialPage: this.page,
        resolveComponent: (component) => {
          return require(`./Pages/${component}`).default
        },
      },
      scopedSlots: this.$scopedSlots,
    })
  },
}
</script>