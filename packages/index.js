import tinyDialog from './dialog/index.js';

const install = function (Vue) {
  const components = [tinyDialog];
  // 组件注册
  components.forEach(item => {
    Vue.component(item.name, item);
  });
};

export default {
  install,
  tinyDialog
};
