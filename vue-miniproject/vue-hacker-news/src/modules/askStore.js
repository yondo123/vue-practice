import {getAsk, getAskDetail} from '../api/request.js';

const state = {
    list: [],
    askDetail: null,
    page: 1
}

const getters = {
    getAsksList(state) {
        return state.list;
    },
    getAskDetail(state) {
        return state.askDetail;
    }
}

const mutations = {
    setAsks(state, askList) {
        return state.list = askList;
    },
    setAskDetail(state, question){
        return state.askDetail = question;
    }  
}

const actions = {
    requestAskList(state) {
        getAsk()
            .then(response => {
                state.commit('setAsks', response.data);
            })
            .catch(error => {
                console.log(`ERROR :: [${error}]`);
            });
    },
    requestAskDeatil(state, askId){
        getAskDetail(askId)
            .then(response => {
                state.commit('setAskDetail', response.data);
            })
            .catch(error => {
                console.log(`ERROR:: [${error}]`);
            });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}