import Vuex from 'vuex';
//vuex
export const store = new Vuex.Store({
    state: {
        boardList: [
            {
                message: '안녕하세요',
                id: 'sjchoi',
                date: '20211111'
            }
        ], //게시글 배열
        popupFlag: false //true : 팝업창 열림, false : 꺼짐
    },

    getters: {
        getBoardList: function(state) {
            return state.boardList;
        }
    },

    mutations: {
        setBoardList: function(state, item) {
            state.popupFlag = false;
            return state.boardList.push(item);
        },

        onPopup: function(state) {
            return (state.popupFlag = true);
        },

        offPopup: function(state) {
            return (state.popupFlag = false);
        }
    }
});
