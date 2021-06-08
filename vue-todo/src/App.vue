<template>
  <div>
    <todoNav></todoNav>
    <todoInput v-on:addItem="addRowItem"></todoInput>
    <todoTable></todoTable>
  </div>
</template>
<script>
import TodoNav from "./components/TodoNav.vue";
import TodoTable from "./components/TodoTable.vue";
import TodoInput from "./components/TodoInput.vue";

export default {
  data: () => {
    return {
      todoIndex: 0,
    };
  },
  components: {
    todoNav: TodoNav,
    todoTable: TodoTable,
    todoInput: TodoInput,
  },
  methods: {
    //todo item 추가
    addRowItem(item) {
      const currentTime = this.getUtcToKrTime();
      const todoItem = {
        index: this.todoIndex++,
        todo: item,
        complete: false,
        create: currentTime.toISOString().substr(11, 8),
        removeFlag: false,
      };
      console.log("[todolist update]" + JSON.stringify(todoItem));
      this.$store.commit("addTodo", todoItem);
    },
    //한국 시간 반환
    getUtcToKrTime() {
      const krDiffTime = 9 * 60 * 60 * 1000;
      const curTime = new Date();
      const utcTime =
        curTime.getTime() + curTime.getTimezoneOffset() * 60 * 1000;
      return new Date(utcTime + krDiffTime);
    },
  },
};
</script>