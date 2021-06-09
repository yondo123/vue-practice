import { getUserDetail } from '../api/request.js'; 
const state = {
    userDetail : null
};

const getters = {
    getUserInfo(state){
        return state.userDetail;
    }
};

const mutations = {
    setUserInfo(state, userInfo){
        return state.userDetail = userInfo; 
    }
};

const actions = {
    requestUserInfo(state, userName){
        getUserDetail(userName)
            .then(response => {
                state.commit('setUserInfo', response.data)
            })
            .catch(error => {
                console.log(`ERROR :: ${error}`);
            });
    }
};

export default {
    namespaced : true,
    state,
    getters,
    mutations,
    actions
};