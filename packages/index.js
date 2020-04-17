import dialogComponent from './dialog.vue';

const _dialogCreate = (Vue, properties) => {
  const instance = new Vue({
    render (h) {
      return h(dialogComponent, {
        props: {
          config: properties
        }
      });
    }
  });
  const component = instance.$mount();
  document.body.appendChild(component.$el);
};

const tinyDialog = {
  install: function (Vue) {
    // 组件注册
    Vue.component('tinyDialog', dialogComponent);
    // 全局注册
    Vue.prototype.$tinyDialog = function (Vue) {
      return {
        open (props) {
          _dialogCreate(Vue, props);
        }
      }(Vue);
    };
  }
};

export default tinyDialog;
