import axios from 'axios';
const REQUEST_URL = 'http://localhost:8088/board/';

/**
 * 게시글 조회
 * @param {string} postId : 게시글 ID
 */
const getPostItem = function (postId) {
    return axios.get(`${REQUEST_URL}${postId}`);
};

/**
 * 게시글 작성
 * @param {string} title : 제목
 * @param {string} content : 내용
 * @returns
 */
const sendPost = function (title, content) {
    const today = new Date();
    return axios.post(REQUEST_URL, {
        date: `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`,
        title,
        content
    });
};

/**
 * 게시글 수정
 * @param {string} postId
 * @param {string} title
 * @param {string} content
 */
const editPost = function (postId, title, content) {
    return axios.patch(`${REQUEST_URL}${postId}`, {
        title,
        content
    });
};

export {getPostItem, sendPost, editPost};
