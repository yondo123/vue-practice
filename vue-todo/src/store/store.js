import Vue from 'vue'
import Vuex from 'vuex'

//vue 컴포넌트 사용 시 vuex 라이브러리 사용 (Global)
Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        todoItems : []    
    }
});