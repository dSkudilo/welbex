<template>
    <nav class="app-paginate">
        <ul class="pagination pagination-sm">
            <li 
                :class="['page-item', {'disabled':currentPage == id + 1}]"
                v-for="(p,id) in pages" :key="p"
                @click="$emit('update:modelValue', p)"
            >
                <a class="page-link" href="#">{{p}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:'app-paginate',
    props: ['modelValue', 'count', 'size','currentPage'],
    emits: ['update:modelValue'],
    computed:{
        pages(){
            return Math.ceil(this.count / this.size)
        }
    }
}
</script>

<style>

</style>