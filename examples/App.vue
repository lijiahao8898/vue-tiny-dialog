<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <tiny-dialog :visible="visible"
                 title="温馨提示！"
                 container="您输入的内容不合法~"
                 tip="请再次输入正确的内容~"
                 @confirm="confirm"
                 @close="close"
    >
    </tiny-dialog>
    <div class="btn">
      <button class="app-open" @click="open">打开</button>
    </div>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data () {
      return {
        visible: false,
      }
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
