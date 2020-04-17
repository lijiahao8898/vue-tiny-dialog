# vue-tiny-dialog

### Usage

the first step in `main.js`：

```js
import tinyDialog from 'vue-tiny-dialog';

Vue.use(tinyDialog);

new Vue({
  el: '#app',
  router,
  components: { App, tinyDialog },
  template: '<App/>'
})
```

and then in `.vue`：

```
<tiny-dialog
      :config="config"
      @closeDialog="close"
      @confirmDialog="confirm"></tiny-dialog>


      data () {
        return {
          config: {
            info: '',
            confirm: true,
            show: true,
            title: '',
            container: '',
            width: '',
            height: ''
          }
        }
      },
```

finally：

```js
// it works
```

### options in config

* container - 内容
* info - 副内容
* confirm - 是否显示 `确认`，`取消`按钮
* show - 显示、隐藏弹框
* title - 标题
* width - 宽度
* height - 高度

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
