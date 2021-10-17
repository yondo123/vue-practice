import axios from 'axios';

const constants = {
    REQUEST_URL: 'https://api.hnpwa.com/'
}

/**
 * 뉴스 목록 조회
 * @returns {Promise} : response data 
 */
const getNews = () => {
    return axios.get(constants.REQUEST_URL + 'v0/news/1.json');
}

/**
 * 질문 목록 조회
 * @returns {Promise} : response data
 */
const getAsk = () => {
    return axios.get(constants.REQUEST_URL + 'v0/ask/1.json');
}

/**
 * jobs 조회
 * @returns {Promise} : response data
 */
const getJobs = () => {
    return axios.get(constants.REQUEST_URL + 'v0/jobs/1.json');
}

/**
 * 사용자 상세 조회
 * @param {String} userName : 사용자 이름 
 * @returns {Promise} : response data
 */
const getUserDetail = (userName) => {
    return axios.get(constants.REQUEST_URL + `v0/user/${userName}.json`);
};

/**
 * 질문 상세 조회
 * @param {String} askId 
 * @returns {Promise} : response data
 */
const getAskDetail = (askId) => {
    return axios.get(constants.REQUEST_URL + `v0/item/${askId}.json`);
}
export {
    getNews,
    getAsk,
    getJobs,
    getUserDetail,
    getAskDetail
}
