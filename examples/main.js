import Vue from 'vue'
import App from './App.vue'
import chaos from '../packages/index'
Vue.config.productionTip = false;
Vue.use(chaos);

new Vue({
  render: h => h(App),
}).$mount('#app');
