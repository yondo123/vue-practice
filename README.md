## :green_book: Vue.js Framework 정리
### 개발환경 구성
1. node 버전 확인 및 vue-cli 설치
    ```bash
    node -v
    npm -v
    ## 삭제 후 업그레이드
    npm uninstall -g vue-cli
    npm install -g @vue/cli
    ```

2. vue project 생성하기  
- **vue 2**
  ```bash
  # vue init 'project-template-type' 'project-directory'
  vue init webpack-simple vue-project
  ```
- **vue 3**
  ```bash
  # vue create 'project-directory'
  vue create vue-project
  ```

### Index
1. **[component](./01_vue_basic/component.html)**
2. **[computed](./01_vue_basic/computed.html)**
3. **[watch](./01_vue_basic/watch.html)**
4. **[v-model](./01_vue_basic/v-model.html)**
5. **[v-for](./02_vue_props_emit/../02_props_emit/src/components/PBMain.vue)**
6. **[props/emit](./02_props_emit/README.md)**