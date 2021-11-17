import { createApp } from 'vue';
import Vuex from 'vuex';
import { store } from './store/store';
import App from './App.vue';

const vuexApp = createApp(App);
vuexApp.use(Vuex);
vuexApp.use(store);
vuexApp.mount('#app');
