<template>
<table id="customers">
  <tr>
    <th>USER NAME</th>
    <th>ID</th>
    <th>CONTRACT</th>
  </tr>
  <tr v-for="item in userlist" v-bind:key="item">
    <td>{{ addPersonTitle(item.name) }}</td>
    <td>{{ item.username  }}</td>
    <td>{{ item.email }}</td>
  </tr>
</table>

</template>
<script>
export default {
  props : ['userlist'],
  methods: {
    addPersonTitle : function (data) {
      return data + ' 님';
    }
  },
}
</script>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>