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
        font-weight: 500;
        padding: 0 1rem;
        border-radius: $btn-border-radius;
        color: $color-cube-1;
        border: none;
        &:hover {
            filter: grayscale(30%)
        }
    }
    .orange {
        background-color: $color-cube-5;
    }
    .green {
        background-color: $material-design-3;
    }
</style>