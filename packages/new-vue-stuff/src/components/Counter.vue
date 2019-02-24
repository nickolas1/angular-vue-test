<template>
    <div>
        <h1>{{ count }}</h1>
        <button v-on:click="incrementCount()">increment that counter</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'MessageDisplayer',
    computed: mapState(['count']),
    methods: mapMutations(['incrementCount'])
};
</script>

<style scoped lang="scss"></style>
