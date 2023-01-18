<template>
    <div>
        <h1>Damon Vaughn</h1>
        <p>Best-selling author and the most</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @use '../style/variables' as *;
    h1 {
        font-family: $font-headwrite;
        font-size: 4rem;
        margin-left: 3rem;
    }
    p {
        font-family: $font-title;
        margin-left: 3rem;
        font-weight: 800;
        font-size: 2rem;
    }
</style>