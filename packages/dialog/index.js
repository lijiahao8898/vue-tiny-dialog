// import tinyDialog from './dialog.vue';
// import Vue from 'vue';
// const DialogConstructor = Vue.extend(tinyDialog);
//
// const dialog = (properties) => {
//   console.log(properties);
//   properties = properties || {};
//   const instance = new DialogConstructor({
//     props: properties
//   });
//   const component = instance.$mount();
//   document.body.appendChild(component.$el);
// };

import dialogComponent from './dialog.vue';
dialogComponent.install = function (Vue) {
  Vue.component(dialogComponent.name, dialogComponent);
};

export default dialogComponent;
