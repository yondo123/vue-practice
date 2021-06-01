<template>
  <div class="input_container">
      <label for="inpTodo">Todo</label>
      <input type="text" id="inpTodo" v-model="todoItem"  v-on:keyup.enter="addItem" class="inputArea">
      <input type="button" value="ADD" v-on:click="addItem" class="todoBtn">
      <!-- use the modal component, pass in the prop -->
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">알림</h3>
        <p slot="body">값을 입력해주세요!</p>
      </modal>
  </div>
</template>
<script>
import Modal from './util/Modal.vue'
export default {
  components:{
    Modal : Modal
  },
  data: ()=>{
      return {
          todoItem : '',
          showModal : false
      }
  },
  methods: {
      addItem(){
          if(this.todoItem.length > 0){
            this.$emit('addItem', this.todoItem);
            return this.initInputContent();
          }else{
              this.showModal = true;
          }
      },
      initInputContent(){
          return this.todoItem = '';
      }
  }
}
</script>
<style>
label {
    color : darkgray;
}

input { 
    float: right;
    margin: 1.25rem;
    height: 1.875rem;
    background-color: #efefef;
    border-radius: 30px;
    border-style: none;
    width: 6.25rem;
}

.input_container {
    display: flex;
    align-items: center;
    padding-left: 20px;
}

.inputArea {
    height: 1.6rem;
    width: 15rem;
    margin-left: 3.438rem;
}

.todoBtn {
    float: right;
    margin: 1.25rem;
    height: 1.875rem;
    background-color: #FF9933;
    color: #efefef;
    /* make the borders more round */
    border-radius: 30px;
    border-style: none;
    width: 6.25rem;
}

</style>