<template>
    <div class="form-control">
        <label>
            <slot></slot>
        </label>
        <input
            @input="inputHandler"
            :value="modelValue"
            :type="type" 
            :placeholder="placeholder"
            :class="{'form-control_error':err}"
        >
        <small
            v-if="err"
        >{{err}}</small>
    </div>
</template>

<script>
export default {
    name:'app-input',
    props:{
        type:{
            type:String,
            default:'text'
        },
        placeholder:{
            type:String,
            default:'Введите текст'
        },
        modelValue:{
            type:String
        },
        err:{
            type:String
        }
    },
    methods:{
        inputHandler(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>

</style>