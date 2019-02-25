<template>
    <div>
        <h5>I am Vue, Angular sent me this message</h5>
        <h1 :class="$style['message-displayer']">{{ message }}</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'MessageDisplayer',
    computed: mapState(['message']),
    mounted(){
        console.log(this.$style)
    }};
</script>

<style module lang="scss">
    .message-displayer {
        color: darkslateblue;
    }
</style>
