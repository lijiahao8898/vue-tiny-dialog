<template>
  <div :class="classPre" v-if="visible">
    <div :class="classPre + '__wrapper'"
         :style="style">
      <div :class="classPre + '__header'">
        <p>{{title}}</p>
      </div>
      <div :class="classPre + '__content'">
        <slot>
          <p>{{container}}</p>
          <p>{{tip}}</p>
        </slot>
      </div>
      <div :class="classPre + '__footer'">
        <slot name="footer">
          <button @click="confirm()">确认</button>
          <button class="default" @click="close()">取消</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'chaos-dialog',
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
        classPre: 'chaos-dialog',
        style: {
          width: this.width + 'px',
          height: this.height + 'px'
        },
        isConfirm: this.confirm,
      };
    },
    mounted () {
    },
    methods: {
      close: function () {
        this.$emit('close');
      },
      confirm: function () {
        this.$emit('close');
      }
    }
  };
</script>

<style type="text/scss" lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .chaos-dialog {
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
      z-index: 1;
      margin: 0 auto;
      border-radius: 5px;
      animation: showDialog 0.5s;
    }

    &__header {
      text-align: left;
      font-size: 18px;
      font-weight: bold;
      margin: 15px;
    }

    &__content {
      font-size: 14px;
      padding: 15px;
      min-height: 50px;
    }

    &__footer {
      text-align: right;
      margin: 10px 0;
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
    margin-right: 10px;
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
