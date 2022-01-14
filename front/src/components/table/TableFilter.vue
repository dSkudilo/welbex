<template>
    <form @submit.prevent="filterHandler" class="container">
        <app-dropdown
            :data="colsName"
            :modelValue="colName"
            v-model="colName"
        >Выберите колонку</app-dropdown>
        <app-dropdown
            :data="conditionsNameFilter"
            :modelValue="conditionName"
            v-model="conditionName"
        >Выберите условие фильтрации</app-dropdown>
        <app-input
            v-model="value"
            :err="inputError"
        >Условие</app-input>
        <app-button
            type="submit"
            :disabled="!isValid"
        >ОТСОРТИРОВАТЬ</app-button>
    </form>
</template>

<script>
import { isNumber } from '@/utils/isNumber.js'
export default {
    props:['colsName','conditions','types'],
    emits:['filterHandler'],
    data(){
        return{
            value:null,
            colName:'Выберите колонку',
            conditionName:'Выберите условие фильтрации',
            conditionNameTrn:'',
            inputError:''
        }
    },
    methods:{
        filterHandler(){
            this.$emit('filterHandler',{
                type:this.conditionNameTrn,
                value:this.value,
                colName:this.colName
            })
            this.conditionNameTrn = ''
            this.value = ''
            this.colName = 'Выберите колонку'
            this.conditionName = 'Выберите условие фильтрации'
        }
    },
    computed:{
        conditionsNameFilter(){
            if(this.colName == 'Выберите колонку'){
                return 
            }else if( this.colName == 'title'){
                return {
                    [Object.keys(this.conditions)[1]]:
                    Object.values(this.conditions)[1]
                }
            }else{
                return Object.keys(this.conditions).reduce((acc,key) =>{
                    if(key !== 'include')
                        acc[key] = this.conditions[key]
                    return acc
                },{})
            }
        },
        isValid(){
            this.inputError = ''
            if(!this.value){
           
                return true
            }else if(
                this.types[this.colName] == 'number'
                && !isNumber(this.value)
            ){
                this.inputError = 'Нужно ввести число !'
                return false
            }else if(
                this.types[this.colName] == 'string'
                && isNumber(this.value)
            ){
                this.inputError = 'Нужно ввести строку !'
                return false
            }
            return true
        }
    },
    watch:{
        colName:function(){
            this.conditionName = 'Выберите условие фильтрации'
        },
        conditionName:function(val){
            Object.keys(this.conditions).forEach(key => {
                if(this.conditions[key] == val)
                    this.conditionNameTrn = key
            })
        }
    }

}
</script>

<style>

</style>