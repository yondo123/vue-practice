<template>
    <div>
        <h1 class="text-3xl font-bold underlitne my-6 text-center">Hacker-News API</h1>
        <div class="flex flex-col px-10 items-end">
            <button type="button" class="items-center justify-center rounded-md bg-yellow-400 px-2 w-14 text-white">Write</button>
            <ul>
                <li v-for="item in listItems" v-bind:key="item" class="my-4 border-b-2 border-gray-400 news-list" @click="viewNewsContent(item)">
                    <p class="font-semibold cursor-pointer truncate">{{ item.title }}</p>
                    <p>
                        {{ item.time_ago }}<span class="mx-2 w-2 h-2 bg-yellow-500 rounded-full px-2 py-0 text-white">{{ item.points }}</span>
                    </p>
                </li>
            </ul>
        </div>
        <pagination v-model="page" :records="totalLength" :per-page="30" @paginate="changePage" />
        <transition name="modal">
            <Modal v-if="showModal" @close="close">
                <template v-slot:header>
                    <div class="news-item flex flex-wrap">
                        <h3 class="header">작성자</h3>
                        <p class="content">{{ newsItem['user'] }}</p>
                    </div>
                </template>
                <template v-slot:body>
                    <div class="news-item flex flex-wrap">
                        <h3 class="header">작성날짜</h3>
                        <p class="content">{{ formatLocaleTime(newsItem['time']) }}</p>
                    </div>
                </template>
            </Modal>
        </transition>
    </div>
</template>

<script>
import Pagination from 'v-pagination-3';
import Modal from './common/Modal.vue';
export default {
    components: {
        Pagination,
        Modal
    },
    data() {
        return {
            newsItem: {},
            showModal: false,
            newsInfo: {},
            page: 1,
            records: 20,
            listItems: []
        };
    },
    mounted: function () {
        this.fetchData();
    },
    computed: {
        totalLength() {
            return this.records;
        }
    },
    methods: {
        fetchData: function () {
            fetch(`https://api.hnpwa.com/v0/news/${this.page}.json`)
                .then(response => response.json())
                .then(items => {
                    this.records = items.length * 10;
                    this.listItems = items;
                });
        },
        changePage: function (page) {
            this.page = page;
            return this.fetchData();
        },
        viewNewsContent: function (newsItem) {
            this.newsItem = newsItem;
            this.showModal = !this.showModal;
        },
        close: function () {
            this.showModal = false;
        },
        formatLocaleTime: function (value) {
            const fullMs = value.toString().padEnd(13, 0);
            return new Date(Number(fullMs)).toLocaleDateString();
        }
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
