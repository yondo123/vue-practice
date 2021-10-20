import Stand from '../components/Stand.vue';
import Team from '../components/Team.vue';
import DetailTeam from '../components/DetailTeam.vue';
import {createRouter, createWebHistory} from 'vue-router';
//vue-router 4~
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/stand'
        },
        {
            path: '/stand',
            component: Stand
        },
        {
            path: '/team',
            component: Team
        },
        {
            path: '/team/:id',
            component: DetailTeam
        }
    ]
});

export default router;

//인스턴스방식
// new VueRouter({
//     routes:[]
// });

//메서드방식
