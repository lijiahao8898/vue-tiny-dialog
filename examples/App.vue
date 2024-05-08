<template>
    <div id="app">
        <vue-tiny-dialog :visible="visible"
                         title="温馨提示！"
                         container="你好"
                         tip="我是一个tip"
                         @close="close"
                         @confirm="confirm"
        >
        </vue-tiny-dialog>
        <vue-tiny-dialog :visible="visible2"
                         title="温馨提示！"
                         container="你好"
                         tip="我是一个tip"
                         @close="close"
                         :modal="false"
        >
            <template slot="header">插槽标题</template>
            <div class="con">插槽内容</div>
            <template slot="footer">
                <div class="btn-group">
                    <button @click="confirm">确定插槽按钮</button>
                    <button @click="close">取消插槽按钮</button>
                </div>
            </template>
        </vue-tiny-dialog>
        <div class="btn">
            <button class="app-open" @click="open('visible')">打开</button>
            <br/>
            <button class="app-open" @click="open('visible2')">打开自定义插槽</button>
            <br/>
            <button class="app-open" @click="openJS">用js打开</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {},
    data() {
        return {
            visible: false,
            visible2: false
        };
    },
    mounted() {

    },
    methods: {
        open(key) {
            this[key] = true;
        },
        async openJS () {
            const response = await this.$tinyDialog(
                {
                    title: '我用js打开title',
                    visible: true
                }
            )
            console.log(response)
        },
        close() {
            console.log('close')
            this.visible = false;
            this.visible2 = false;
        },
        confirm() {
            console.log('confirm')
            this.visible = false;
            this.visible2 = false;
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

.btn-group > button {
    background-color: #7cd1f9;
    color: #fff;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 24px;
    margin: 0 0 0 10px;
    cursor: pointer;
    outline: none;
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
    margin: 20px 0;
    cursor: pointer;
    outline: none;
}
</style>
