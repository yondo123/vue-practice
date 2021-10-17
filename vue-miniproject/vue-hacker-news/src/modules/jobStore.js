import { getJobs } from '../api/request.js';

const state = {
    list : [],
    page : 1
}

const getters = {
    getJobList(state){
        return state.list;
    }
}

const mutations = {
    setJobList(state, jobList){
        return state.list = jobList;
    }
}

const actions = {
    requestJobList(state){
        getJobs()
            .then(response => {
                state.commit('setJobList', response.data);
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