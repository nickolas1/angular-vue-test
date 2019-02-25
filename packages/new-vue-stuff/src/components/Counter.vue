<template>
    <div>
        <h5>the count is</h5>
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
