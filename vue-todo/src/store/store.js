import Vue from 'vue'
import Vuex from 'vuex'

//vue 컴포넌트 사용 시 vuex 라이브러리 사용 (Global)
Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        todoItems : []    
    },
    mutations : {
        //todo 추가
        addTodo(state, item){
            return state.todoItems.push(item);
        },
        //todo 삭제
        removeTodo(state, index){
            return state.todoItems[index].removeFlag = true;
        },
        //todo 상태 변경
        changeTodo(state, index){
            return state.todoItems[index].complete = !state.todoItems[index].complete;
        }
    }
});