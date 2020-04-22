# vue-tiny-dialog

### Usage

the first step in `main.js`：

```js
import tinyDialog from 'vue-tiny-dialog';
import 'vue-tiny-dialog/dist/vue-tiny-dialog.css';

Vue.use(tinyDialog);
```

and then in your `*.vue`：

```
<vue-tiny-dialog></vue-tiny-dialog>
```

finally it works

### options in props
```
visible: {
  type: Boolean,
  default: false
},
title: {
  type: String,
  default: ''
},
container: {
   type: String,
   default: ''
},
tip: {
   type: String,
   default: ''
},
width: {
   type: String,
   default: '400'
},
height: {
   type: String,
   default: ''
}
```

* visible - 显示、隐藏弹框
* title - 标题
* container - 内容
* tip - 副内容
* info - 副内容
* width - 宽度
* height - 高度

## slot of header、footer、default
```vue
 <vue-tiny-dialog :visible="visible"
                 title="温馨提示！"
                 container="您输入的内容不合法~"
                 tip="请再次输入正确的内容~"
                 @confirm="confirm"
                 @close="close"
    >
    <template slot="header"></template>
    <div></div>
    <template slot="footer"></template>
</vue-tiny-dialog>
```
