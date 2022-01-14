<template>
    <button 
        :disabled="disabled"
        :type="type" 
        class="btn btn-primary">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name:'app-button',
    props:['type','disabled']
}
</script>
   
    