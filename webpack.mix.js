const mix = require('laravel-mix')
let path = require('path')

mix
  .js('resources/js/app.js', 'public/js')
  .js('resources/js/inertia-app.js', 'public/js')
  .css('resources/css/app.css', 'public/css')
  .webpackConfig({
    resolve: {
      alias: {
        // vue$: 'vue/dist/vue.runtime.esm.js',
        '@': path.resolve('resources/js'),
      },
    },
  })

if (mix.inProduction()) {
  mix.version()
}
