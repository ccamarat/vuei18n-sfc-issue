// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import VueI18n from 'vue-i18n'
import langEn from '../static/i18n/en.json'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: langEn
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App }
})
