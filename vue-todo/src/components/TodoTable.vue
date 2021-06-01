<template>
    <div>
        <section class="mainTodo">
            <table class="todo-list">
                <colgroup>
                    <col width="50%">
                    <col width="20%">
                    <col width="20%">
                    <col width="10%">
                </colgroup>
                <thead>
                    <tr>
                        <th scope="row">Todo</th>
                        <th scope="row">Create</th>
                        <th scope="row" colspan="2">Flag</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in this.$store.state.todoItems" v-bind:key="item.todoItems" v-bind:class="{'active' : (item.removeFlag == false)}">
                        <td><div>{{item.todo}}</div></td>
                        <td><div>{{formatKoreanTime(item.create)}}</div></td>
                        <td>
                            <div><span><i v-bind:class="getTodoFlagIcon(item.complete)" v-on:click="completeItem(item.index)"></i></span></div>
                        </td>
                        <td v-on:click="removeItem(item.index)"><div><i class="fas fa-eraser todo-delete"></i></div></td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>
<script>
import TODO_ICON from '../assets/constants.js'
export default {
  data : ()=>{
      return {
          isDeleted : true,
      }
  },
  methods: {
      //todo check icon 지정
      getTodoFlagIcon : function(todoFlag){
          if(todoFlag){
              return TODO_ICON.CHECKED_ICON;
          }else{
              return TODO_ICON.UNCHECK_ICON;
          }
      },
      //한국 표현 형식으로 변경
      formatKoreanTime : function(time){
          const timeSet = time.split(':');
          return `${timeSet[0]}시 ${timeSet[1]}분 ${timeSet[2]}초`
      },
      //할일 삭제
      removeItem : function(index){
          this.$emit('removeItem', Number(index));
      },
      //할일 완료
      completeItem : function(index){
          this.$emit('toggleItem', Number(index));
      }
  }
}
</script>
<style>
.todo-delete {
    color : #E94F4F;
}

.todo-check {
    color : #09B332;
}
.mainTodo {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 10px;
    border: solid 0.14rem #ddd;
    border-radius: 11px;
}

.todo-list {
    margin: auto;
    width: 99%;
    table-layout: fixed;
    border-collapse: separate;
}

.todo-list thead,
tbody {
    border: solid 0.14rem #ddd;
    border-radius: 15px;
}

.todo-list thead {
    text-align: left;
    color: #222;
}

.todo-list tr th{
    color: #FF9933;
    font-size: 1.2rem;
    border-bottom: solid 0.14rem #efefef;
}

.todo-list tr:nth-of-type(2n) {
    background: #f4f4f4;
}

thead tr {
    border-width: 2px;
}

tbody tr {
    cursor: pointer;
}

tbody td, thead th {
    text-align: center;
}

th:first-child,
td:first-child {
    width: 10%;
    text-align: center;
}


td:first-child:hover,
td:first-child:focus {
    color: rgba(0, 0, 0, 0.5);
}

td {
    font-size: 1rem;
    color: #222;
}

.completed td {
    color: rgba(0, 0, 0, 0.25);
}

.completed td:nth-child(2) {
    text-decoration: line-through;
}

tr.active td div {
  max-height: 100px;
  padding: 10px 10px;
  transition: max-height 0.6s, padding 0.6s;
}

tr td div {
  max-height: 0;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height 0.3s, padding 0.3s;
}
</style>

