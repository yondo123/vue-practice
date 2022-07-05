<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header modal-item">
                    <slot name="header"> default header </slot>
                </div>

                <div class="modal-body modal-item">
                    <slot name="body"> default body </slot>
                    <button class="modal-default-button" @click="closePopup">닫기</button>
                </div>
            </div>
        </div>
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
