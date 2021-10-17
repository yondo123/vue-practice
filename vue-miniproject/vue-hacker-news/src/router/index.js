import Vue from 'vue';
import VueRouter from 'vue-router';
import Ask from '../views/Ask.vue';
import News from '../views/News.vue';
import Job from '../views/Job.vue';
import User from '../views/User.vue';
import AskItem from '../views/AskItem.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/news'
    }, {
        path: '/news',
        component: News
    }, {
        path: '/ask',
        component: Ask
    }, {
        path: '/job',
        component: Job
    }, {
        path: '/user/:id',
        component : User
    }, {
        path: '/ask/:id',
        component : AskItem
    }]
});