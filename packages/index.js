import VueTinyDialogCreate,  {VueTinyDialog} from './dialog/index';

const install = function (Vue) {
  const components = [VueTinyDialog];
  // 组件注册
  components.forEach(item => {
    Vue.component(item.name, item);
  });
  Vue.use(VueTinyDialogCreate)
};

export default {
  install,
  VueTinyDialog
};
