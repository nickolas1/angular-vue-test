<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'MessageDisplayer',
    computed: mapState(['message'])
};
</script>

<style scoped lang="scss"></style>
