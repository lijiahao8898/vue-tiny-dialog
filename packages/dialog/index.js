import Vue from 'vue';
import VueTinyDialog from "./dialog";
let _options = {}

/**
 * @description: 初始化加载组件
 * @param {*} Component
 * @return {*}
 */
function loadComponent(Component) {
  if (typeof Component === 'function') {
    return new Promise((resolve) => {
      Component().then((resp) => {
        resolve(resp.default)
      })
    })
  }
  return Promise.resolve(Component)
}

/**
 * 打开一个模态框
 */
const initVueTinyDialog = (options = _options) => {
  return async (props, target = 'body') => {
    const _component = await loadComponent(VueTinyDialog)
    return new Promise((resolve) => {
      // 创建构造器
      const Profile = Vue.extend(_component)
      // 创建 Profile 实例，并挂载到一个元素上。
      const vm = new Profile({
        propsData: props,
        _confirm,
        _cancel,
        ...options,
      }).$mount()
      // 将组建实例加入dom中
      document.querySelector(target).appendChild(vm.$el)

      /**
       * 弹窗取消方法
       */
      function _cancel(value) {
        destroyDialog()
        resolve(value)
      }

      /**
       * 弹窗确认方法
       */
      function _confirm(value) {
        destroyDialog()
        resolve(value)
      }

      function destroyDialog() {
        vm.$destroy()
        const flag = vm.$el.ownerDocument.body.contains(vm.$el)
        if (flag) document.querySelector(target).removeChild(vm.$el)
      }
    })
  }
}

const VueTinyDialogCreate = initVueTinyDialog()

VueTinyDialogCreate.install = function (Vue, options = {}) {
  _options = options || {}
  Vue.prototype.$tinyDialog = initVueTinyDialog(options)
}

export default VueTinyDialogCreate
export {VueTinyDialog}
