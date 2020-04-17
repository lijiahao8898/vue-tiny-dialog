import Vue from 'vue'
import App from './App.vue'
import tinyDialog from '../packages/index'

Vue.config.productionTip = false;
Vue.use(tinyDialog);

new Vue({
  render: h => h(App),
}).$mount('#app');
