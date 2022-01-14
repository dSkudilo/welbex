<template>
    <tr>
        <td>{{ toDate(row.date) }}</td>
        <td>{{ row.title }}</td>
        <td>{{ row.quantity }}</td>
        <td>{{ row.distance }}</td>
    </tr>
</template>

<script>
import  { toDate }  from '@/utils/date'
export default {
    props:['row'],
    methods:{
        toDate:(d) => {
            return toDate(d)
        }
    }
}
</script>

<style>

</style>