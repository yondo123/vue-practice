import Vue from 'vue';
import VueRouter from 'vue-router';
import Ask from '../views/Ask.vue';
import News from '../views/News.vue';
import Job from '../views/Job.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [{
        path: '/news',
        component: News
    }, {
        path: '/ask',
        component: Ask
    }, {
        path: '/job',
        component: Job
    }]
});
