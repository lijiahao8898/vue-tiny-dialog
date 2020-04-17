<template>
  <div :class="classPre" v-if="visible">
    <div :class="classPre + '__wrapper'"
         :style="style">
      <div :class="classPre + '__header'">
        <p>{{title}}</p>
      </div>
      <div :class="classPre + '__content'">
        <p>{{container}}</p>
        <p>{{tip}}</p>
      </div>
      <div :class="classPre + '__footer'">
        <button @click="confirm()">确认</button>
        <button class="default" @click="close()">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vue-tiny-dialog',
    props: {
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
    },
    data () {
      return {
        classPre: 'vue-tiny-dialog',
        style: {
          width: this.width + 'px',
          height: this.height + 'px'
        },
        isConfirm: this.confirm
      };
    },
    mounted () {
    },
    methods: {
      close: function () {
        // window.eventBus.$emit('closeDialog');
        this.$emit('close');
      },
      confirm: function () {
        // window.eventBus.$emit('confirmDialog');
        this.$emit('close');
      }
    }
  };
</script>

<style type="text/scss" lang="scss" scoped>
  .vue-tiny-dialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);

    &__wrapper {
      background-color: #fff;
      position: relative;
      width: 400px;
      height: 200px;
      z-index: 1;
      margin: 0 auto;
      border-radius: 5px;
      animation: showDialog 0.5s;
    }

    &__header {
      text-align: left;
      text-indent: 15px;
      font-size: 20px;
      margin-left: 5px;
    }

    &__content {
      font-size: 16px;
    }

    &__footer {
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 5px;
      text-align: right;
    }
  }

  button {
    background-color: #7cd1f9;
    color: #fff;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    padding: 8px 20px;
    margin: 0;
    cursor: pointer;
  }

  button.default {
    background-color: #ccc;
  }

  button:focus {
    outline: none;
  }

  @keyframes showDialog {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1)
    }
    1% {
      -webkit-transform: scale(.5);
      transform: scale(.5)
    }
    45% {
      -webkit-transform: scale(1.05);
      transform: scale(1.05)
    }
    80% {
      -webkit-transform: scale(.95);
      transform: scale(.95)
    }
    to {
      -webkit-transform: scale(1);
      transform: scale(1)
    }
  }
</style>
