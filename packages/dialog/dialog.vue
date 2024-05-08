<template>
    <div :class="classPre" v-show="visible">
        <div v-if="modal" :class="classPre + '__mask'" @click="close"></div>
        <div :class="classPre + '__wrapper'">
            <div :class="classPre + '__dialog'"
                 :style="style">
                <div :class="classPre + '__header'">
                    <slot name="header">
                        <p>{{ title }}</p>
                    </slot>
                </div>
                <div :class="classPre + '__content'">
                    <slot>
                        <p>{{ container }}</p>
                        <p>{{ tip }}</p>
                    </slot>
                </div>
                <div :class="classPre + '__footer'">
                    <slot name="footer">
                        <button class="confirm" @click="confirm">确认</button>
                        <button class="default" @click="close">取消</button>
                    </slot>
                </div>
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
        // 弹框的标题
        title: {
            type: String,
            default: ''
        },
        // 弹框的内容
        container: {
            type: String,
            default: ''
        },
        // 弹框的tip
        tip: {
            type: String,
            default: ''
        },
        // 弹框的宽度
        width: {
            type: String,
            default: '400'
        },
        // 弹框的高度
        height: {
            type: String,
            default: ''
        },
        // 是否需要遮罩层
        modal: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            classPre: 'vue-tiny-dialog',
            style: {
                width: `${this.width}px`,
                height: `${this.height}px`
            }
        };
    },
    mounted() {
    },
    methods: {
        close: function () {
            this.$emit('close');
            this.$options._cancel && this.$options._cancel('close')
        },
        confirm: function () {
            this.$emit('confirm');
            this.$options._confirm && this.$options._confirm('confirm')
        }
    }
};
</script>

<style type="text/scss" lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

.vue-tiny-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    &__mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 998;
    }

    &__wrapper {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
    }

    &__dialog {
        background-color: #fff;
        margin: 0 auto;
        border-radius: 5px;
        animation: showDialog 0.5s;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    &__header {
        text-align: left;
        font-size: 18px;
        font-weight: bold;
        margin: 10px;
    }

    &__content {
        font-size: 14px;
        padding: 10px;
        min-height: 50px;
    }

    &__footer {
        text-align: right;
        padding: 10px;
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
    cursor: pointer;
}

button.confirm {
    margin-right: 10px;
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
