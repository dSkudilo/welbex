<template>
  <main>
    <div v-if="rows.length > 0">
      <table-table
        :rows="paginRows"
        :colsName="colsName"
      ></table-table>
      <app-paginate
        v-model="page"
        :count="rows.length"
        :size="PAGE_SIZE"
        :currentPage="page"
      ></app-paginate>
    </div>
    <h4 v-else>Записей нету</h4>
    <table-filter
      :colsName="colsNameFilter"
      :conditions="conditions"
      :types="types"
      @filterHandler="filterHandler"
    ></table-filter>    
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import chunk from 'lodash.chunk'
import TableTable from '@/components/table/TableTable.vue'
import TableFilter from '@/components/table/TableFilter.vue'
export default {
  data(){
    return{
      conditions:{
        'equal':'Равно',
        'include':'Содержит',
        'more':'Больше чем',
        'less':'Меньше чем'
      },
      types:{
        'title':'string',
        'quantity':'number',
        'distance':'number'
      },
      PAGE_SIZE:2,
      page: 1
    }
  },
  methods:{
    filterHandler(payload){
      this.sorting({...payload})
    },
    ...mapActions('table',['getAll','sorting'])
  },
  computed:{
    colsNameFilter(){
      return this.colsName.reduce((acc,colName) => {
        if(colName !== 'date')
          acc.push(colName)
        return acc
      },[])
    },
    paginRows(){
      return chunk(this.rows, this.PAGE_SIZE)[this.page - 1]
    },
    ...mapGetters('table',['rows','colsName'])
  },
  mounted(){
    this.getAll()
  },
  components:{
    TableTable,
    TableFilter
  }
  }
</script>

<style>



</style>