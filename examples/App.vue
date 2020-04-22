<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <vue-tiny-dialog :visible="visible"
                  title="温馨提示！"
                  container="你好"
                  tip="我是一个tip"
                  @close="close"
    >
      <template slot="header">插槽标题</template>
      <div class="con">插槽内容</div>
      <template slot="footer">
        <div>
          <button @click="close">插槽按钮</button>
        </div>
      </template>
    </vue-tiny-dialog>
    <div class="btn">
      <button class="app-open" @click="open">打开</button>
    </div>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue';

  export default {
    name: 'App',
    components: {
      // HelloWorld
    },
    data () {
      return {
        visible: false,
        visible2: true
      };
    },
    mounted () {

    },
    methods: {
      open () {
        this.visible = true;
      },
      close () {
        this.visible = false;
      },
      confirm () {
        this.visible = false;
      }
    }
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  button {
    background-color: #7cd1f9;
    color: #fff;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 24px;
    margin: 0;
    cursor: pointer;
    outline: none;
  }
</style>
