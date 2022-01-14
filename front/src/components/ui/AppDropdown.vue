<template>
    <div class="back-drop"
        v-if="isActive"
        @click="toggle"
    ></div>
    <div class="dropdown">
        <input 
            type="button"
            class="dropdown__button"
            @click="toggle"
            :style="{'z-index':zIndex}"
            :value="modelValue"
        >
        <ul 
            class="dropdown__list"
            v-if="isActive"
        >
            <li 
                v-for="(item) in data"
                :key="item"
                class="dropdown__item"
                @click="select(item)"
            >
                {{item}}
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    name:'app-dropdown',
    props:['data','modelValue'],
    data(){
        return{
            activeFlag:false,
        }
    },
    methods:{
        toggle(){
            this.activeFlag = !this.activeFlag
        },
        select(item){
            this.toggle()
            this.$emit('update:modelValue', item)
        }
    },
    computed:{
        isActive(){
            return this.activeFlag
        },
        zIndex(){
            const zIndex = this.activeFlag ? 1000 : 1
            return zIndex
        }
    }
}
</script>

<style>

</style>