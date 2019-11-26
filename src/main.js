import Vue from 'vue'
import App from 'src/App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from 'router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Vuelidate from 'vuelidate'
Vue.use(require('vue-pusher'), {
  api_key: '19f814902a00899fa4c5',
  options: {
      cluster: 'ap1',
      encrypted: true,
  }
});

Vue.use(Vuelidate)
Vue.use(VueSidebarMenu)

import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
  router:router,
  template: '<router-view></router-view>'
}).$mount('#app')
