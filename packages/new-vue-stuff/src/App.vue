<template>
    <div id="app">
        <MessageCountWrapper/>
    </div>
</template>

<script>
import MessageCountWrapper from "./components/MessageCountWrapper";
import store from './store';

export default {
    name: 'app',
    store,
    components: {
        MessageCountWrapper
    },
    beforeMount() {
        console.log(this.$store)
        // this.$store.registerModule('main', store);
    }
};
</script>

<style lang="scss">
</style>
