## vue-practice
Vue.js Framework 예제 코드 테스트 및 학습 내용 정리

### init vue 
```bash
    npm install -g @vue/cli
```

### create project
+ **vue 2.X**
    ```bash
        #vue init 'project-template-type' 'project-location'
        vue init webpack-simple vue-project
    ```
  + **vue-webpack-boilerplate**
    + hot-reload, router, unit test, linting 지원 (대규모 프로젝트 적합)
  + **webpack-simple**
    + 뻐른 프로토타입 규모에 적합
  + **vue-simple-boilerplate**
    + 하나의 html 존재 (튜토리얼 정도의 최소규모 프로젝트에 적합) 
+ **vue 3.X**
    ```bash
        #vue create 'project-loaction'
        vue create vue-project
    ```

### start project
`package.json` 참고  
```bash
    npm run serve
```

### use npm module
+ **axios**
  ```bash
    npm install axios
  ```