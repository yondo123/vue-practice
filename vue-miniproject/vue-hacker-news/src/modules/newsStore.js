import { getNews } from '../api/request.js';
//actions -> mutations -> state
const state = {
    list: [],
    page: 1
};

const getters = {
    getNewsList(state) {
        return state.list;
    }
};

const mutations = {
    nextPage(state) {
        return state.page + 1;
    },
    setNews(state, newsList) {
        return state.list = newsList;
    }
};

const actions = {
    requestNewsList(state) {
        getNews()
            .then(response => {
                state.commit('setNews', response.data);
            })
            .catch(erorr => {
                console.log(`ERROR :: [${erorr}]`);
            });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};