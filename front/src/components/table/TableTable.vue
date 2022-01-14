<template>
  <table class="table">
    <thead>
      <tr>
        <th 
          v-for="name in colsName"
          :key="name"
          scope="col"
        >{{name}}</th>
      </tr>
    </thead>
    <tbody>
        <table-row
            v-for="row in rows"
            :key="row.title"
            :row="row"
        ></table-row>     
    </tbody>
  </table>
</template>

<script>
import TableRow from '@/components/table/TableRow.vue'
export default {
    props:['rows','colsName'],
    components:{
        TableRow
    }
}
</script>

<style>

</style>