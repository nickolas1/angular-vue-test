<template>
    <div class="wrapper">
        <img alt="Vue logo" src="../assets/logo.png" />
        <MessageDisplayer />
        <Counter />
    </div>
</template>

<script>
import MessageDisplayer from './MessageDisplayer';
import Counter from './Counter';
import {mapMutations} from "vuex";

export default {
    name: 'MessageCountWrapper',
    components: {
        MessageDisplayer,
        Counter
    },
    props: {
        message: {
            type: String
        }
    },
    methods: mapMutations(['setMessage']),
    watch: {
        message(val) {
            this.setMessage(val);
        }
    }
};
</script>

<style scoped lang="scss">
div {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.wrapper {
    width: 60%;
    margin: 10px auto;
    padding: 10px;
    border: 2px solid darkslategray;
}
</style>
