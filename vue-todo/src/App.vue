<template>
  <div>
    <todoNav></todoNav>
    <todoHeader></todoHeader>
    <todoInput v-on:addItem="addRowItem"></todoInput>
    <todoTable v-bind:propsdata="todoItems" v-on:removeItem="removeRowItem"></todoTable>
  </div>
</template>
<script>
import TodoNav from './components/TodoNav.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoTable from './components/TodoTable.vue'
import TodoInput from './components/TodoInput.vue'

export default {
    data: () => {
        return {
            todoIndex: 0,
            todoItems: []
        }
    },
    components: {
        'todoNav': TodoNav,
        'todoHeader': TodoHeader,
        'todoTable': TodoTable,
        'todoInput': TodoInput
    },
    methods: {
        addRowItem: function (item) {
            const currentTime = this.getUtcToKrTime();
            this.todoItems.push({
                index: this.todoIndex++,
                todo: item,
                complete: false,
                create: currentTime.toISOString().substr(11, 8),
                removeFlag : false
            });
            console.log('[todolist update]' + JSON.stringify(this.todoItems));
        },
        removeRowItem: function (index) {
          this.todoItems[index].removeFlag = true;
        },
        getUtcToKrTime: function () {
            const krDiffTime = 9 * 60 * 60 * 1000;
            const curTime = new Date();
            const utcTime = curTime.getTime() + (curTime.getTimezoneOffset() * 60 * 1000);
            return new Date(utcTime + krDiffTime);
        },
    }
}
</script>
<style>
  
</style>