## Vue router
```bash
npm install vue-router
#vue router 3.0.x  -> Vue 2 (LTS 안정화버전)
npm uninstall vue-router
npm install vue-router@next

#package.json -> dependencies에 설치 (운영)
npm install vue-router --save
npm install vue-router -S
npm install vue-router #node 12.0.X 버전 이후로 -S 생략가능

#package.json -> dependencies에 설치 (개발)
npm insatll vue-router --dev
npm install vue-router -D
```
### vue-cli 3버전에는 router 4 버전 권장 사용
```bash
npm install vue-router@next
# vue router 4.0.X -> Vue 3
```
## router 사용법
1. router 설정 파일 생성 `src\router\index.js`
2. main.js에서 라우팅 설정 파일 import
   ```js
        import {createApp} from 'vue';
        import App from './App.vue';
        import router from './router';

        const myApp = createApp(App);
        myApp.use(router);
        myApp.mount('#app');
   ```
3. 라우팅 대상 요소에 `router-view` 태그 적용

## router 기초 설정 예제
```js
// 📁 src/router/index.js
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