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
 * @returns {Promise} :
 */
const getJobs = () => {
    return axios.get(constants.REQUEST_URL + 'v0/jobs/1.json');
}

export {
    getNews, getAsk, getJobs
}
