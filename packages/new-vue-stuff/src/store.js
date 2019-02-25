import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        message: '<<there is no message>>',
        count: 0
    },
    mutations: {
        incrementCount(state) {
            state.count++;
        },
        clearCount(state) {
            state.count = 0;
        },
        setMessage(state, message) {
            state.message = message;
        }
    },
    actions: {}
});
