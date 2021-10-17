import Vue from 'vue';
import Vuex from 'vuex';
import ask from '../modules/askStore.js';
import job from '../modules/jobStore.js';
import news from '../modules/newsStore.js';
import user from '../modules/userStore.js';

Vue.use(Vuex);


export const store = new Vuex.Store({
    modules : {
        news,
        ask,
        job,
        user
    }
});

