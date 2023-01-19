<template>
    <button :style="{width : customWidth}" :class="color">
        {{ text }}
    </button>
</template>

<script>
    export default {
        props : {
            text : String,
            customWidth : String,
            color : String
        }
    }
</script>

<style lang="scss" scoped>
    @use '../../style/variables' as *;
    button {
        line-height: 50px;
        font-family: $font-body;
        padding: 0 1rem;
        border-radius: $btn-border-radius;
        color: $color-cube-1;
        border: none;
    }
    .orange {
        background-color: $matirial-design-1;
    }
    .green {
        background-color: $matirial-design-3;
    }
</style>