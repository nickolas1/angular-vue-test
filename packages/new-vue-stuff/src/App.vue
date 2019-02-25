<template>
    <div id="app">
        <MessageCountWrapper :message="message" />
    </div>
</template>

<script>
import MessageCountWrapper from './components/MessageCountWrapper';
import store from './store';
import { mapState } from 'vuex';

export default {
    name: 'app',
    store, // if using a vuex store, initialize it here rather than in main.js
    props: {
        // anything that needs to come from the consumer app needs to be passed in as a prop on the entry point component
        message: {
            type: String
        }
    },
    components: {
        MessageCountWrapper
    },
    computed: mapState(['count']),
    watch: {
        count() {
            this.$emit('count-changed', this.count);
        }
    }
};
</script>
