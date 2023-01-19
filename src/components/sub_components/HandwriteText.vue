<template>
    <h3>
        {{ text }}
    </h3>
</template>

<script>
    export default {
        props : {
            text : String
        }
    }
</script>

<style lang="scss" scoped>
  @use '../../style/variables' as *;
    h3 {
        font-family: $font-handwrite;
        font-size: 7rem;
        color: $color-cube-5;
    }
</style>