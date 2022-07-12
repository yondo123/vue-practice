<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-wrap relative w-full max-w-2xl px-4 h-full md:h-auto">
                <!-- Modal content -->
                <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">Terms of Service</h3>
                        <button
                            @click="closePopup"
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <textarea
                            class="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-500"
                            placeholder="Your message..."
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                        ></textarea>
                        <p class="text-gray-500 text-base leading-relaxed dark:text-gray-400">
                            requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them. requires organizations to notify users as soon as
                            possible of high-risk data breaches that could personally affect them. requires organizations to notify users as soon as possible of high-risk data breaches that could
                            personally affect them.
                        </p>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            data-modal-toggle="default-modal"
                            type="button"
                            class="text-white bg-yellow-400 hover:bg-opacity-75 focus:ring-4 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-50 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                            수정하기
                        </button>
                        <button
                            @click="closePopup"
                            data-modal-toggle="default-modal"
                            type="button"
                            class="text-white bg-yellow-400 hover:bg-opacity-75 focus:ring-4 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-50 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header modal-item">
                    <slot name="header"> default header </slot>
                </div>

                <div class="modal-body modal-item">
                    <slot name="body"> default body </slot>
                    <button class="modal-default-button" @click="closePopup">닫기</button>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    methods: {
        closePopup: function () {
            this.$emit('close');
        }
    }
};
</script>

<style>
/* we will explain what these classes do next! */

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-wrap {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #f69e0b;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
    border: 1px solid #f69e0b;
    color: #fff;
    border-radius: 8px;
    background-color: #f69e0b;
    width: 3.6rem;
    padding: 0 2px;
}
</style>
