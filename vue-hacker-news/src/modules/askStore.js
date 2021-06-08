import { getAsk } from '../api/request.js';

const state = {
    list : [],
    page : 1
}

const getters = {
    getAsksList(state) {
        return state.list;
    }
}

const mutations = {
    setNews(state, askList){
        return state.list = askList;
    }
}

const actions = {
    requestAskList(state) {
        getAsk()
            .then(response => {
                state.commit('setNews', response.data);
            })
            .catch(error => {
                console.log(`ERROR :: [${error}]`);
            });
    }
}

export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions
}