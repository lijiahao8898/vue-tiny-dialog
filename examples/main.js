import Vue from 'vue'
import App from './App.vue'
import VueTinyDialog from '../packages/index'
Vue.config.productionTip = false;
Vue.use(VueTinyDialog);

new Vue({
  render: h => h(App),
}).$mount('#app');
