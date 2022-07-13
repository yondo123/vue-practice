<template>
    <div>
        <h1 class="text-3xl font-bold underlitne my-6 text-center">✏️ Simple Post</h1>
        <div class="flex flex-col px-10 items-end">
            <button type="button" class="items-center justify-center rounded-md bg-yellow-400 px-2 w-14 text-white" @click="openModal(0)">Write</button>
            <ul>
                <li v-for="item in listItems" v-bind:key="item" class="my-4 border-b-2 border-gray-400 news-list" @click="openModal(item.id)">
                    <p class="font-semibold cursor-pointer truncate">{{ item.title }}</p>
                    <p>
                        {{ item.content }}<span class="text-sm mx-2 w-5 h-2 bg-gray-100 rounded-full px-2 py-0 text-gray-500">{{ item.date }}</span>
                    </p>
                </li>
            </ul>
        </div>
        <pagination v-model="page" :records="records" :per-page="10" @paginate="changePage" />
        <transition name="modal">
            <Modal :isEdit="edit" :postId="postId" v-if="showModal" @close="closeModal" @refresh="getPost"></Modal>
        </transition>
    </div>
</template>

<script>
import axios from 'axios';
import Pagination from 'v-pagination-3';
import Modal from './common/Modal.vue';
import {ref, onMounted} from 'vue';
export default {
    components: {
        Pagination,
        Modal
    },
    setup() {
        onMounted(function () {
            getPost();
        });

        //Modal
        const showModal = ref(false);
        const edit = ref(false);

        function openModal(id) {
            edit.value = id > 0;
            postId.value = id;
            showModal.value = !showModal.value;
        }

        function closeModal(isRefresh) {
            showModal.value = false;
            return isRefresh ? getPost() : false;
        }

        //Post Api
        const page = ref(1);
        const records = ref(0);
        const listItems = ref([]);
        const postId = ref(0);
        function getPost() {
            axios.get(`http://localhost:8088/board?_page=${page.value}&_limit=10`).then(function (res) {
                if (res.status === 200) {
                    records.value = res.headers['x-total-count'] || 0;
                    listItems.value = res.data;
                }
            });
        }

        function changePage(tobePage) {
            page.value = tobePage;
            getPost();
        }

        return {
            edit,
            postId,
            showModal,
            openModal,
            closeModal,
            getPost,
            page,
            records,
            listItems,
            changePage
        };
    },
    data() {
        return {
            newsItem: {},
            newsInfo: {}
        };
    }
};
</script>

<style>
.news-list {
    min-height: 4rem;
    min-width: 480px;
    max-width: 640px;
}

.VuePagination__pagination {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    display: flex;
    justify-content: center;
}

.VuePagination__pagination-item {
    padding: 0 0.6rem;
    min-width: 0.8rem;
}

.VuePagination__count {
    display: none;
}

.active {
    font-weight: 700;
    color: #fff;
    background-color: #f69e0b;
    border-radius: 4px;
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.modal-item h3 {
    min-width: 3.4rem;
    font-weight: 700;
    margin-top: 0;
    color: #f69e0b;
}

.modal-item .content {
    padding-left: 1.2rem;
}
</style>
