<template>
  <div>
    <h2>Sample User Table with Vue🪐</h2>
    <app-table v-bind:userlist="userlist"></app-table>
    <hr>
    <button v-on:click="getUserList">get Data</button>
  </div>
</template>
<script>
import UserTable from './components/UserTable.vue';
import axios from 'axios';

export default {
    components: {
        'app-table': UserTable
    },
    data: () => {
        return {
            userlist: []
        }
    },
    methods: {
        getUserList: function () {
            console.log('try requestData..');
            const reqUrl = 'https://jsonplaceholder.typicode.com/users';
            axios.get(reqUrl)
                //기본 함수 형식 (function(res){})로 하면 this객체 참조 못함..
                .then(res => {
                    console.log('[SUCCESS]' + JSON.stringify(res));
                    this.userlist = res.data;
                })
                .catch(error => {
                    console.log('[ERROR]' + error);
                });
        }
    },
}
</script>
<style>
  
</style>